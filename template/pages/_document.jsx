import Document, { Html, Head, Main, NextScript } from 'next/document'
import config from 'config/config.json'

class MyDocument extends Document {
  render() {
    return (
      <Html className={config.fontAutoScaling ? '' : 'auto-scaling-disabled'}>
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
