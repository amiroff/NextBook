import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className='antialiased bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 scrollbar scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
