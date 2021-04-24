// This is the global layout used by whole app
import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import SideBarContext from 'components/store/sidebar-context'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useContext, useEffect, useRef, useState } from 'react'
import { useScroll } from 'react-use'
import config from 'config/config.json'

export default function DefaultLayout({
  title,
  htmlTitle,
  description,
  children,
  part
}) {
  const {
    projectTitle,
    projectURL,
    projectDescription,
    centeredLayout
  } = config
  const scrollRef = useRef(null)
  const { x, y } = useScroll(scrollRef)
  const [progressStyle, setprogressStyle] = useState({})
  const sideBarCtx = useContext(SideBarContext)

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

      <header className='z-40 bg-gray-100 dark:bg-gray-800 fixed w-screen top-0 shadow-md h-11 font-medium text-sm md:text-md  backdrop-filter backdrop-blur backdrop-brightness-110 opacity-90 dark:opacity-90 tracking-wide'>
        <NavBar title={title} part={part} />
      </header>

      <div
        className='content-wrapper mt-11 flex lg:container lg:mx-auto'
        ref={scrollRef}
      >
        <div className='sidebar flex-none w-56 p-2 h-screen overflow-scroll fixed top-11 hidden md:block tracking-wide'>
          <SideBar />
        </div>

        <div className='content-wrapper flex md:ml-56'>{children}</div>
      </div>
    </>
  )
}
