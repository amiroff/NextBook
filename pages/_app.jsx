import splitbee from '@splitbee/web'
import { OptionalHistoryContextProvider } from 'components/store/history-context'
import { SideBarContextProvider } from 'components/store/sidebar-context'
import { ThemeContextProvider } from 'components/store/theme-context'
// app.css imports tailwindcss styles
import 'styles/app.css'
import 'styles/print.css'

if (
  process.env.NEXT_PUBLIC_SPLITBEE_TOKEN &&
  process.env.NODE_ENV === 'production'
) {
  splitbee.init({
    token: process.env.NEXT_PUBLIC_SPLITBEE_TOKEN
  })
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <OptionalHistoryContextProvider>
        <SideBarContextProvider>
          <Component {...pageProps} />
        </SideBarContextProvider>
      </OptionalHistoryContextProvider>
    </ThemeContextProvider>
  )
}
