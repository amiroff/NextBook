import Layout from 'layouts/layout'
import Link from 'next/link'

export default function Custom404() {
  const title = '404 - Page Not Found'

  return (
    <Layout title={title} description={title}>
      <div className='content'>
        <h1>{title}</h1>
        <p>
          The page you're looking for was not found.{' '}
          <Link href='/'>
            <a>Homepage</a>
          </Link>{' '}
          might be a good place to find your way out.
        </p>
      </div>
    </Layout>
  )
}
