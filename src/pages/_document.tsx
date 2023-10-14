import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Este projeto tem o objetivo de agilizar o processo do pedido de pizzas, proporcionando uma experiência melhor para o cliente."
          />
          <meta
            name="keywords"
            content="pizzaria, delivery, everton, everton toffanetto, next, nextjs, react"
          />
          <meta name="author" content="Éverton Toffanetto" />
          <meta name="copyright" content="© Éverton Toffanetto" />
          <link
            rel="canonical"
            href="https://pizzaria-toffanetto.querocriarsite.com"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800&display=swap"
            as="style"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;800&display=swap"
          />
          <link rel="apple-touch-icon" href="/icon-apple.png" />
          <link rel="icon" href="/favicon.ico" />
          {/* pwa */}
          <meta name="theme-color" content="#7f1d1d" />
          <link rel="manifest" href="/manifest.json" />
          {/* open graph */}
          <meta property="og:site_name" content="Pizzaria Toffanetto" />
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:url"
            content="https://pizzaria-toffanetto.querocriarsite.com"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pizzaria Toffanetto" />
          <meta
            property="og:description"
            content="Este projeto tem o objetivo de agilizar o processo do pedido de pizzas, proporcionando uma experiência melhor para o cliente."
          />
          <meta
            property="og:image"
            content="https://pizzaria-toffanetto.querocriarsite.com/img/logo-og.jpg"
          />
          <meta
            property="og:image:secure_url"
            content="https://pizzaria-toffanetto.querocriarsite.com/img/logo-og.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="og:image:alt" content="Pizzaria Toffanetto" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
