import { MDXProvider } from '@mdx-js/react'
import splitbee from '@splitbee/web'
import { SideBarContextProvider } from 'components/context'
import withDarkMode from 'next-dark-mode'
import { componentMap } from 'components/component-mapper'
import config from '../config.json'
import '../styles/halfmoon-variables.min.css'
import '../styles/global.css'
import '../styles/custom.css'

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
      <MDXProvider components={componentMap}>
        <Component {...pageProps} />
      </MDXProvider>
    </SideBarContextProvider>
  )
}

export default withDarkMode(MyApp, { defaultMode: config.defaultTheme })
