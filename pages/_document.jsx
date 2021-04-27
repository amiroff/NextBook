import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
