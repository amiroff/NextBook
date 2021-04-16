import fs from 'fs'
import path from 'path'

// BOOK_PATH is useful when you want to get the path to a specific file
export const BOOK_PATH = path.join(process.cwd(), 'book')

// postFilePaths is the list of all mdx files inside the BOOK_PATH directory
export const contentFilePaths = fs
  .readdirSync(BOOK_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))
