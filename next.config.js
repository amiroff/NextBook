const toc = require('markdown-toc')
const slug = require('remark-slug')
const GithubSlugger = require('github-slugger')
const externalLinks = require('remark-external-links')
const remarkSubSuper = require('remark-sub-super')
const hints = require('remark-hint')
const breaks = require('remark-breaks')
const withMdxEnhanced = require('next-mdx-enhanced')

nextConfig = { reactStrictMode: true }

module.exports = withMdxEnhanced({
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [externalLinks, slug, hints, remarkSubSuper, breaks],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {
      const result = toc(mdxContent, { slugify: new GithubSlugger() })
      return {
        tocRaw: result.json,
      }
    },
    phase: 'both',
  },
  reExportDataFetching: false,
})(nextConfig)
