const toc = require('markdown-toc')
const slug = require('remark-slug')
const GithubSlugger = require('github-slugger')
const externalLinks = require('remark-external-links')
const remarkSubSuper = require('remark-sub-super')
const hints = require('remark-hint')
const breaks = require('remark-breaks')
const remarkMark = require('remark-mark-plus')
const codeImport = require('remark-code-import')
const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

nextConfig = { reactStrictMode: true }

const withMdxEnhanced = require('next-mdx-enhanced')({
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [externalLinks, slug, hints, remarkSubSuper, breaks, remarkMark, codeImport],
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
})

module.exports = withPlugins([[withBundleAnalyzer], [withMdxEnhanced]], nextConfig)
