import { MDXProvider } from '@mdx-js/react'
import splitbee from '@splitbee/web'
import { SideBarContextProvider } from 'components/store/sidebar-context'
import { componentMap } from 'components/component-mapper'
import config from '../config.json'
import '../styles/halfmoon-variables.min.css'
import '../styles/global.css'
import '../styles/custom.css'
import { ThemeContextProvider } from 'components/store/theme-context'

if (
  process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development' &&
  config.splitBeeToken
) {
  splitbee.init({
    token: config.splitBeeToken
  })
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <SideBarContextProvider>
        <MDXProvider components={componentMap}>
          <Component {...pageProps} />
        </MDXProvider>
      </SideBarContextProvider>
    </ThemeContextProvider>
  )
}
