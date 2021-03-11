import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='auto-scaling-disabled'>
        <Head />
        <body className='with-custom-webkit-scrollbars with-custom-css-scrollbars'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
