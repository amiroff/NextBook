import { MDXProvider } from '@mdx-js/react'
import {
  Blockquote,
  Image,
  CustomLink,
  Pre,
  Table,
  Details,
  Summary,
  Code,
} from 'components/mdxcomponents'
import '../styles/global.css'

const components = {
  table: Table,
  a: CustomLink,
  img: Image,
  blockquote: Blockquote,
  pre: Pre,
  details: Details,
  summary: Summary,
  code: Code,
}

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
