// -----------------------------------------------------------------------------
//  Copyright (c) NoMercy Labs.
//
//  This file is part of NomNomzBot. You may use, change and share it for free,
//  for any noncommercial purpose, under the PolyForm Noncommercial License
//  1.0.0. You may not earn money with it. Distributed WITHOUT ANY WARRANTY.
//  See LICENSE for details, and TRADEMARKS.md for the name and logo.
//
//  SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// -----------------------------------------------------------------------------

// Exports every template helper the bot registers to docs-work/helpers.json.
//
// It loads the BUILT product (never builds it), creates every concrete ITemplateHelperProvider the
// way the product's AddImplementationsOf scan does, builds the real TemplateHelperRegistryAggregate,
// and writes one JSON row per registry entry. The English description comes from the product's
// strings*.xml files (the text name is the description key with "." replaced by "_").
//
// Rerun (Git Bash, from the docs repo root; PRODUCT is the product repo, SCRATCH any empty folder):
//   PRODUCT=C:/Projects/NoMercyLabs/nomnomzbot
//   cp -r "$PRODUCT/server/src/NomNomzBot.Api/bin/Debug/net10.0/." "$SCRATCH/productbin"
//   dotnet build scripts/export-template-helpers -c Release -p:ProductBin="$SCRATCH/productbin" -o "$SCRATCH/productbin"
//   dotnet "$SCRATCH/productbin/export-template-helpers.dll" --product "$PRODUCT" \
//     --dll "$PRODUCT/server/src/NomNomzBot.Infrastructure/bin/Debug/net10.0/NomNomzBot.Infrastructure.dll" \
//     --out docs-work/helpers.json
// Then delete the scratch folder and scripts/export-template-helpers/obj.
// Optional: --drift-waiver "<text>" adds a "driftWaiver" entry to meta.

using System.Diagnostics;
using System.Reflection;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Xml.Linq;
using Microsoft.Extensions.DependencyInjection;
using NomNomzBot.Application.Abstractions.Templating;
using NomNomzBot.Infrastructure.Platform.Templating;

Dictionary<string, string> options = ReadOptions(args);
string productRoot = Require(options, "product");
string outPath = Require(options, "out");
string dllPath = options.GetValueOrDefault("dll") ?? typeof(TemplateHelperRegistryAggregate).Assembly.Location;

List<TextConflict> textConflicts = [];
Dictionary<string, TextSource> texts = LoadTexts(
    Path.Combine(productRoot, "server", "i18n", "strings", "values"),
    textConflicts
);
IServiceProvider emptyServices = new ServiceCollection().BuildServiceProvider();

// The same scan as AssemblyScanExtensions.ConcreteTypes + AddImplementationsOf<ITemplateHelperProvider>.
List<Type> providerTypes =
[
    .. typeof(TemplateHelperRegistryAggregate)
        .Assembly.GetTypes()
        .Where(t => t is { IsAbstract: false, IsInterface: false, IsGenericTypeDefinition: false })
        .Where(typeof(ITemplateHelperProvider).IsAssignableFrom)
        .OrderBy(t => t.FullName, StringComparer.Ordinal),
];

List<ITemplateHelperProvider> providers = [.. providerTypes.Select(t => Create(t, emptyServices))];
TemplateHelperRegistryAggregate registry = new(providers);

Dictionary<TemplateHelperEntry, ITemplateHelperProvider> providerOfEntry = new(ReferenceEqualityComparer.Instance);
foreach (ITemplateHelperProvider provider in providers)
foreach (TemplateHelperEntry entry in provider.Entries)
    providerOfEntry[entry] = provider;

List<HelperRow> rows =
[
    .. registry
        .All.Select(entry => ToRow(entry, providerOfEntry, texts))
        .OrderBy(r => r.Key, StringComparer.Ordinal)
        .ThenBy(r => r.Prefix, StringComparer.Ordinal)
        .ThenBy(r => r.Provider, StringComparer.Ordinal),
];

Meta meta = new(
    ProductCommit: Git(productRoot, "rev-parse", "--short", "HEAD"),
    DllWrittenAt: new DateTimeOffset(File.GetLastWriteTime(dllPath)).ToString("yyyy-MM-ddTHH:mm:sszzz"),
    Count: rows.Count,
    WithoutDescription: rows.Count(r => r.Description is null),
    DriftWaiver: options.GetValueOrDefault("drift-waiver"),
    TextConflicts: textConflicts
);

JsonSerializerOptions json = new()
{
    WriteIndented = true,
    NewLine = "\n",
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    Encoder = JavaScriptEncoder.UnsafeRelaxedJsonEscaping,
    DefaultIgnoreCondition = JsonIgnoreCondition.Never,
};
string text = JsonSerializer.Serialize(new Export(meta, rows), json) + "\n";
Directory.CreateDirectory(Path.GetDirectoryName(Path.GetFullPath(outPath))!);
File.WriteAllText(outPath, text, new UTF8Encoding(false));

Console.WriteLine($"wrote {outPath}: {meta.Count} helpers, {meta.WithoutDescription} without description, {providers.Count} providers");
return 0;

static Dictionary<string, string> ReadOptions(string[] args)
{
    Dictionary<string, string> result = new(StringComparer.Ordinal);
    for (int i = 0; i + 1 < args.Length; i += 2)
        result[args[i].TrimStart('-')] = args[i + 1];
    return result;
}

static string Require(Dictionary<string, string> options, string name) =>
    options.TryGetValue(name, out string? value)
        ? value
        : throw new ArgumentException($"Missing --{name}.");

// Every strings*.xml under values/ (the English files), in ordinal file order: strings.xml first, then the
// strings_*.xml files. A name defined twice with different text keeps the later file's text (the strings_template_*
// files are the ones the product embeds for the SDK) and the clash is listed in meta.textConflicts.
static Dictionary<string, TextSource> LoadTexts(string valuesDir, List<TextConflict> conflicts)
{
    Dictionary<string, TextSource> result = new(StringComparer.Ordinal);
    foreach (string file in Directory.GetFiles(valuesDir, "strings*.xml").OrderBy(f => f, StringComparer.Ordinal))
    foreach (XElement element in XDocument.Load(file).Root!.Elements("string"))
    {
        string name = element.Attribute("name")!.Value;
        TextSource later = new(Path.GetFileName(file), element.Value);
        if (result.TryGetValue(name, out TextSource? earlier) && earlier.Text != later.Text)
            conflicts.Add(new TextConflict(name, later.File, later.Text, earlier.File, earlier.Text));
        result[name] = later;
    }
    return result;
}

// Creates a provider with the stubs its constructor needs: a scope factory from an empty container, a Random.
static ITemplateHelperProvider Create(Type type, IServiceProvider services)
{
    ConstructorInfo constructor = type
        .GetConstructors(BindingFlags.Public | BindingFlags.Instance)
        .OrderByDescending(c => c.GetParameters().Length)
        .First();
    object?[] parameters = [.. constructor.GetParameters().Select(p => Stub(type, p.ParameterType, services))];
    return (ITemplateHelperProvider)constructor.Invoke(parameters);
}

// Reading Entries never calls a data service, so any other reference-type dependency is passed as null and named on stderr.
static object? Stub(Type owner, Type parameter, IServiceProvider services)
{
    if (parameter == typeof(IServiceScopeFactory))
        return services.GetRequiredService<IServiceScopeFactory>();
    if (parameter == typeof(IServiceProvider))
        return services;
    if (parameter == typeof(Random))
        return new Random(0);
    if (parameter.IsValueType)
        throw new NotSupportedException($"{owner.FullName} needs a {parameter.FullName}, which the exporter has no stub for.");
    Console.Error.WriteLine($"stub: {owner.Name} gets null for {parameter.Name}");
    return null;
}

static HelperRow ToRow(
    TemplateHelperEntry entry,
    Dictionary<TemplateHelperEntry, ITemplateHelperProvider> providerOfEntry,
    Dictionary<string, TextSource> texts
)
{
    providerOfEntry.TryGetValue(entry, out ITemplateHelperProvider? provider);
    string? key = string.IsNullOrEmpty(entry.Description.Key) ? null : entry.Description.Key;
    string? description = key is not null && texts.TryGetValue(key.Replace('.', '_'), out TextSource? found) ? found.Text : entry.Description.Text;
    return new HelperRow(
        Key: entry.Key,
        Prefix: entry.Prefix,
        DescriptionKey: key,
        Description: description,
        Sample: entry.Sample,
        Contexts: [.. entry.Contexts.Select(c => c.ToString())],
        Scope: entry.Scope.ToString(),
        Freshness: entry.Freshness.ToString(),
        EventScoped: entry.EventScoped,
        LazyArguments: entry.LazyArguments,
        Source: entry.Source,
        Provider: provider?.GetType().Name ?? "static-registry",
        ProviderNamespace: provider?.Namespace
    );
}

static string Git(string repo, params string[] arguments)
{
    ProcessStartInfo start = new("git") { RedirectStandardOutput = true };
    start.ArgumentList.Add("-C");
    start.ArgumentList.Add(repo);
    foreach (string argument in arguments)
        start.ArgumentList.Add(argument);
    using Process process = Process.Start(start)!;
    string output = process.StandardOutput.ReadToEnd().Trim();
    process.WaitForExit();
    return process.ExitCode == 0 ? output : throw new InvalidOperationException($"git {string.Join(' ', arguments)} failed.");
}

internal sealed record Export(Meta Meta, IReadOnlyList<HelperRow> Helpers);

internal sealed record Meta(
    string ProductCommit,
    string DllWrittenAt,
    int Count,
    int WithoutDescription,
    [property: JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingNull)] string? DriftWaiver,
    IReadOnlyList<TextConflict> TextConflicts
);

internal sealed record TextSource(string File, string Text);

internal sealed record TextConflict(string Name, string WinnerFile, string WinnerText, string LoserFile, string LoserText);

internal sealed record HelperRow(
    string Key,
    string? Prefix,
    string? DescriptionKey,
    string? Description,
    string Sample,
    IReadOnlyList<string> Contexts,
    string Scope,
    string Freshness,
    bool EventScoped,
    bool LazyArguments,
    string? Source,
    string Provider,
    string? ProviderNamespace
);
