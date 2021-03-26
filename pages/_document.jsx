import Document, { Head, Html, Main, NextScript } from 'next/document'
import config from '../config.json'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
