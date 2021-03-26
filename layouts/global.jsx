// This is the global layout used by whole app

import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import config from '../config.json'
import { useScroll } from 'react-use'
import { useEffect, useContext, useRef, useState } from 'react'
import SideBarContext from 'components/store/sidebar-context'
import ThemeContext from 'components/store/theme-context'

export default function GlobalLayout({
  title,
  htmlTitle,
  description,
  children,
  part
}) {
  const { projectTitle, projectURL, projectDescription, toc } = config
  const themeCtx = useContext(ThemeContext)
  const scrollRef = useRef(null)
  const { x, y } = useScroll(scrollRef)
  const [progressStyle, setprogressStyle] = useState({})
  const [themeProps, setThemeProps] = useState(null)
  const sideBarCtx = useContext(SideBarContext)

  useEffect(() => {
    const windowHeight =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight
    const percentage = y / windowHeight
    setprogressStyle({
      transform: `scale(${percentage}, 1)`,
      opacity: `${percentage}`
    })
  }, [x, y])

  useEffect(() => {
    setThemeProps(themeCtx.darkModeActive ? 'dark-mode' : '')
  })

  return (
    <div className={themeProps}>
      <div
        className='page-wrapper with-navbar with-sidebar'
        data-sidebar-type='overlayed-sm-and-down'
        {...sideBarCtx.sideBarProps}
      >
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
          <meta
            name='google-site-verification'
            content='6NCUAOmwT6024Sb1WKubeknfrtCOuHEvY6XLIdLmcak'
          />
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/icon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.webmanifest' />
          <link
            href='https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css'
            rel='stylesheet'
          />
        </Head>

        <div className='progressBarContainer'>
          <div className='progressBar' style={progressStyle} />
        </div>
        <NavBar title={title} part={part} />
        <SideBar toc={toc} part={part} docTitle={projectTitle} />
        <div className='content-wrapper' ref={scrollRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
