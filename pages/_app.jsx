import { MDXProvider } from '@mdx-js/react'
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
import { useEffect, useState } from 'react'
import { useLocalStorage } from 'react-use'
import config from '../config.json'
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

if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development' && config.splitBeeToken) {
  splitbee.init({
    token: config.splitBeeToken,
  })
}

function MyApp({ Component, pageProps }) {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', config.defaultTheme)
  const [theme, setTheme] = useState(storedTheme)

  function toggleTheme() {
    setTheme((currentTheme) => {
      return currentTheme === 'dark' ? 'light' : 'dark'
    })
  }

  useEffect(() => {
    const body = document.body
    if (theme === 'dark') {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
    setStoredTheme(theme)
  }, [theme])

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
