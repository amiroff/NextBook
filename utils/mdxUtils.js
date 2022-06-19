import fs from 'fs'
import path from 'path'
import { visit } from 'unist-util-visit'

export const CONTENT_PATH = path.join(process.cwd(), 'content')

export const contentFilePaths = fs
  .readdirSync(CONTENT_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

/**
 * Generate a list of content folders
 */
export const contentFolders = fs
  .readdirSync(CONTENT_PATH)
  .filter((path) => !path.includes('.md'))

/**
 * Generate an array of each content folder with pages:
 *
 *   [
 *     [ { part: 'foo', page: 'fooContent' } ],
 *     [
 *       { part: 'bar', page: 'barContent1' },
 *       { part: 'bar', page: 'barContent2' },
 *       { part: 'bar', page: 'barContent3' }
 *     ]
 *  ]
 */
export const contentMapping = contentFolders.map((part) => {
  const pages = fs
    .readdirSync(path.join(CONTENT_PATH, part))
    .filter((page) => /\.mdx?$/.test(page))
  return pages.map((page) => ({
    part,
    page: page.replace(/\.mdx?$/, '')
  }))
})

export const rehypeMetaAsProps = () => {
  // A regex that looks for a simplified attribute name, optionally followed
  // by a double, single, or unquoted attribute value
  const re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g
  return (tree) => {
    visit(tree, 'element', (node) => {
      let match
      if (node.tagName === 'code' && node.data && node.data.meta) {
        re.lastIndex = 0 // Reset regex.

        while ((match = re.exec(node.data.meta))) {
          node.properties[match[1]] = match[2] || match[3] || match[4] || ''
        }
      }
    })
  }
}
