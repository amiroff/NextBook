import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import SideBarContext from 'components/store/sidebar-context'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useContext, useEffect, useRef, useState } from 'react'
import { useScroll } from 'react-use'
import config from 'config/config.json'

export default function DocumentLayout({ title, part, description, children }) {
  const { projectTitle, projectURL, projectDescription } = config
  const scrollRef = useRef(null)
  const { x, y } = useScroll(scrollRef)
  const [progressStyle, setprogressStyle] = useState({})
  const sideBarCtx = useContext(SideBarContext)
  const htmlTitle = part ? `${title} - ${part}` : title

  useEffect(() => {
    const windowHeight =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight
    const percentage = y / windowHeight
    setprogressStyle({
      transform: `scale(${percentage}, 1)`,
      opacity: `${percentage}`
    })
  }, [x, y, children])

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

      <div className='progressBarContainer z-50 fixed top-0 w-screen bg-transparent'>
        <div className='progressBar rounded-r-sm' style={progressStyle}></div>
      </div>

      <header
        className='z-40 bg-gray-100 dark:bg-gray-800 fixed w-screen top-0 shadow-md h-12 font-medium text-sm md:text-md  backdrop-filter backdrop-blur backdrop-brightness-75 opacity-90 dark:opacity-90'
        ref={scrollRef}
      >
        <NavBar />
      </header>

      <div className='content-wrapper mt-8 flex xl:container xl:mx-auto'>
        <div className='sidebar flex-none md:w-56 xl:w-64 h-screen overflow-y-auto fixed top-12 hidden md:block scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700'>
          <SideBar />
        </div>

        <div className='md-wrapper flex md:ml-56 xl:ml-64'>{children}</div>
      </div>
    </>
  )
}
