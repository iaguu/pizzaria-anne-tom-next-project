import type { AppProps } from 'next/app'
import GlobalStyles from 'styles/GlobalStyles'
import { DataStorage } from 'hooks/UseContext'
import * as C from 'components'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'styles/loading.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <C.ErrorBoundary>
      <DataStorage>
        <C.HeadPage />
        <C.Header />
        <Component {...pageProps} />
        <C.Footer />
        <C.CookieWarning />
        <C.PopupInstallPwa />
      </DataStorage>
      <GlobalStyles />
    </C.ErrorBoundary>
  )
}

export default App
