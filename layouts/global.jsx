import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import config from 'config/config.json'
import { NextSeo } from 'next-seo'
import Head from 'next/head'

export default function GlobalLayout({ title, part, description, children }) {
  const { projectTitle, projectURL, projectDescription } = config
  const htmlTitle = part ? `${title} - ${part}` : title

  return (
    <>
      <NextSeo
        title={`${htmlTitle} | ${projectTitle}`}
        description={description ? description : projectDescription}
        openGraph={{
          type: 'website',
          url: projectURL,
          title: title,
          description: description
        }}
      />

      <Head>
        <meta
          content='width=device-width, initial-scale=1.0, maximum-scale=5.0'
          name='viewport'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/512.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <header className='z-40 md:shadow-md bg-gray-200 dark:bg-gray-800 fixed w-screen top-0 h-10 md:h-14 font-medium'>
        <NavBar />
      </header>

      <div className='content-wrapper mt-10 md:mt-14 flex xl:container xl:mx-auto'>
        <SideBar />
        <div className={`md-wrapper flex md:ml-56 xl:ml-64`}>{children}</div>
      </div>
    </>
  )
}
