// This is the global layout used by whole app

import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import config from '../config.json'
import { useScroll } from 'react-use'
import { useEffect, useContext, useRef, useState } from 'react'
import { SideBarDataContext } from 'components/context'

export default function Layout({ title, description, children, part }) {
  const { projectTitle, projectURL, projectDescription, toc } = config
  const scrollRef = useRef(null)
  const { x, y } = useScroll(scrollRef)
  const [progressStyle, setprogressStyle] = useState({})
  const sideBarData = useContext(SideBarDataContext)

  useEffect(() => {
    const windowHeight = scrollRef.current.scrollHeight - scrollRef.current.clientHeight
    const percentage = y / windowHeight
    setprogressStyle({ transform: `scale(${percentage}, 1)`, opacity: `${percentage}` })
  }, [x, y])

  return (
    <div
      className='page-wrapper with-navbar with-sidebar with-transitions'
      data-sidebar-type='overlayed-sm-and-down'
      {...sideBarData}
    >
      <NextSeo
        title={`${title} | ${projectTitle}`}
        description={description ? description : projectDescription}
        openGraph={{
          type: 'website',
          url: projectURL,
          title: title,
          description: description,
        }}
      />
      <Head>
        <meta content='width=device-width, initial-scale=1.0, maximum-scale=5.0' name='viewport' />
        <meta
          name='google-site-verification'
          content='6NCUAOmwT6024Sb1WKubeknfrtCOuHEvY6XLIdLmcak'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='icon' href='/icon.svg' type='image/svg+xml' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
      </Head>

      <div className='progressBarContainer'>
        <div className='progressBar' style={progressStyle} />
      </div>
      <NavBar docTitle={projectTitle} />
      <SideBar toc={toc} part={part} />
      <div className='content-wrapper' ref={scrollRef}>
        {children}
      </div>
    </div>
  )
}
