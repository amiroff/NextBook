import { MDXProvider } from '@mdx-js/react'
import config from '../config.json'
import splitbee from '@splitbee/web'
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
} from 'components/mdxcomponents'
import { ThemeContext, ToggleThemeContext } from 'components/themecontext'
import { useState } from 'react'
import '../styles/halfmoon-variables.min.css'
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
  tabs: Tabs,
  tab: Tab,
}

splitbee.init({
  token: config.splitBeeToken,
})

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === 'dark' ? 'light' : 'dark'
    })
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default MyApp
