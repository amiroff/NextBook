import { componentMap } from 'components/component-mapper'
import fs from 'fs'
import GithubSlugger from 'github-slugger'
import matter from 'gray-matter'
import DocumentLayout from 'layouts/document'
import toc from 'markdown-toc'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import path from 'path'
import breaks from 'remark-breaks'
import containers from 'remark-containers'
import externalLinks from 'remark-external-links'
import hints from 'remark-hint'
import remarkMark from 'remark-mark-plus'
import slug from 'remark-slug'
import remarkSubSuper from 'remark-sub-super'
import { contentMapping, CONTENT_PATH } from 'utils/mdxUtils'

export default function Page({ source, frontMatter }) {
  return (
    <DocumentLayout frontMatter={frontMatter}>
      <MDXRemote {...source} components={componentMap} />
    </DocumentLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  // get file and split content into data and frontmatter
  let source = ''
  const filePath = path.join(CONTENT_PATH, params.part, params.page)
  try {
    source = fs.readFileSync(`${filePath}.md`)
  } catch {
    source = fs.readFileSync(`${filePath}.mdx`)
  }
  const { content, data } = matter(source)

  // Generate in-page-toc data and add it to frontmatter scope
  const tocData = toc(content, { slugify: new GithubSlugger() })
  data.tocRaw = tocData.json

  // pre-render markdown content
  const mdxSource = await serialize(content, {
    components: componentMap,
    mdxOptions: {
      remarkPlugins: [
        containers,
        externalLinks,
        slug,
        hints,
        remarkSubSuper,
        breaks,
        remarkMark
      ]
    },
    scope: data
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

export const getStaticPaths = async () => {
  const paths = contentMapping.flat().map((item) => ({ params: { ...item } }))

  return {
    paths,
    fallback: false
  }
}
