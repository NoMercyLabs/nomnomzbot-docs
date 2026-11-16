declare module 'mdx-annotations' {
  import type { Root as MdastRoot } from 'mdast';
  import type { Root as HastRoot } from 'hast';
  import type { Program } from 'estree';
  import type { Plugin } from 'unified';

  export const mdxAnnotations: {
    remark: Plugin<[], MdastRoot>;
    rehype: Plugin<[], HastRoot>;
    recma: Plugin<[], Program>;
  };
}
