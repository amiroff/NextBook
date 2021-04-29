import fs from 'fs'
import path from 'path'

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
