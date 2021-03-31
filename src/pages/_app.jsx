import { MDXProvider } from '@mdx-js/react'
import splitbee from '@splitbee/web'
import { componentMap } from 'components/component-mapper'
import { SideBarContextProvider } from 'components/store/sidebar-context'
import { ThemeContextProvider } from 'components/store/theme-context'
import 'styles/global.css'

if (
  process.env.NEXT_PUBLIC_SPLITBEE_TOKEN &&
  process.env.NEXT_PUBLIC_ENVIRONMENT !== 'development'
) {
  splitbee.init({
    token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN
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
