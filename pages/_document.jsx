import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  isBrowser = typeof window !== 'undefined'
  isWindows =
    MyDocument.isBrowser && window.navigator.appVersion.indexOf('Win') != -1

  render() {
    return (
      <Html>
        <Head />
        <body
          className={`bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100  
                        ${
                          this.isBrowser && this.isWindows
                            ? ' scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700'
                            : ''
                        }`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
