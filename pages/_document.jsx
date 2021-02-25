import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/Halfmoon/1.1.1/css/halfmoon-variables.css'
            integrity='sha512-YlWoZtDNTPVS0iwJfOejyEV7RfmmDegh0uJlszaXzOiocHbF7x8hQJYkpYKvv+MeTmTiDIDJo4D2MxTwHfOozA=='
            crossOrigin='anonymous'
          />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
            rel='stylesheet'
          ></link>
        </Head>
        <body className='with-custom-webkit-scrollbars with-custom-css-scrollbars dark-mode'>
          <Main />
          <NextScript />
          <script async defer src='https://buttons.github.io/buttons.js'></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
