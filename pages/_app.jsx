import { MDXProvider } from '@mdx-js/react'
import splitbee from '@splitbee/web'
import { SideBarContextProvider } from 'components/context'
import {
  Blockquote,
  Code,
  CustomLink,
  Details,
  Image,
  Pre,
  Summary,
  Tab,
  Table,
  Tabs,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
} from 'components/mdxcomponents'
import withDarkMode from 'next-dark-mode'
import config from '../config.json'
import '../styles/halfmoon-variables.min.css'
import '../styles/global.css'
import '../styles/custom.css'

const components = {
  table: Table,
  a: CustomLink,
  img: Image,
  blockquote: Blockquote,
  pre: Pre,
  details: Details,
  summary: Summary,
  code: Code,
  tabs: Tabs,
  tab: Tab,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6
}

if (
  process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development' &&
  config.splitBeeToken
) {
  splitbee.init({
    token: config.splitBeeToken
  })
}

function MyApp({ Component, pageProps }) {
  return (
    <SideBarContextProvider>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </SideBarContextProvider>
  )
}

export default withDarkMode(MyApp, { defaultMode: config.defaultTheme })
