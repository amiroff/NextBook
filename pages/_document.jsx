import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='with-custom-webkit-scrollbars with-custom-css-scrollbars auto-scaling-disabled dark-mode'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
