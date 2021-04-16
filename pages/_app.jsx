import splitbee from '@splitbee/web'
import { HistoryContextProvider } from 'components/store/history-context'
import { SideBarContextProvider } from 'components/store/sidebar-context'
import { ThemeContextProvider } from 'components/store/theme-context'
import 'styles/global.css'
import 'styles/print.css'

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
      <HistoryContextProvider>
        <SideBarContextProvider>
          <Component {...pageProps} />
        </SideBarContextProvider>
      </HistoryContextProvider>
    </ThemeContextProvider>
  )
}
