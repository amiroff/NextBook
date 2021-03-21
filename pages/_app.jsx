import { MDXProvider } from '@mdx-js/react'
import splitbee from '@splitbee/web'
import { SideBarContext, SideBarDataContext, ToggleSideBarContext } from 'components/context'
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
import { useEffect, useState } from 'react'
import { useLocalStorage, useMedia } from 'react-use'
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
}

if (process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development' && config.splitBeeToken) {
  splitbee.init({
    token: config.splitBeeToken,
  })
}

function MyApp({ Component, pageProps }) {
  const isWide = useMedia('(min-width: 1024px)')
  const [storedSideBar, setStoredSideBar] = useLocalStorage('sideBar', isWide ? true : false)
  const [sideBar, setSideBar] = useState(storedSideBar)
  const [sideBarData, setSideBarData] = useState({})

  function toggleSideBar() {
    setSideBar((currentValue) => {
      return currentValue === true ? false : true
    })
  }

  useEffect(() => {
    setStoredSideBar(sideBar)
    setSideBarData(sideBar ? {} : { 'data-sidebar-hidden': 'hidden' })
  }, [sideBar])

  return (
    <SideBarContext.Provider value={sideBar}>
      <SideBarDataContext.Provider value={sideBarData}>
        <ToggleSideBarContext.Provider value={toggleSideBar}>
          <MDXProvider components={components}>
            <Component {...pageProps} />
          </MDXProvider>
        </ToggleSideBarContext.Provider>
      </SideBarDataContext.Provider>
    </SideBarContext.Provider>
  )
}

export default withDarkMode(MyApp, { defaultMode: config.defaultTheme })
