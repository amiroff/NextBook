// This is the global layout used by whole app
import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import SideBarContext from 'components/store/sidebar-context'
import ThemeContext from 'components/store/theme-context'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import { useContext, useEffect, useRef, useState } from 'react'
import { useScroll } from 'react-use'
import config from 'config/config.json'

export default function GlobalLayout({
  title,
  htmlTitle,
  description,
  children,
  part
}) {
  const { projectTitle, projectURL, projectDescription, toc } = config
  const scrollRef = useRef(null)
  const { x, y } = useScroll(scrollRef)
  const [progressStyle, setprogressStyle] = useState({})
  const sideBarCtx = useContext(SideBarContext)
  const themeCtx = useContext(ThemeContext)

  useEffect(() => {
    const windowHeight =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight
    const percentage = y / windowHeight
    setprogressStyle({
      transform: `scale(${percentage}, 1)`,
      opacity: `${percentage}`
    })
  }, [x, y])

  return (
    <div {...themeCtx.themeProps}>
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
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' href='/icon.svg' type='image/svg+xml' />
          <link rel='apple-touch-icon' href='/512.png' />
          <link rel='manifest' href='/manifest.json' />
          <link
            href='https://cdn.jsdelivr.net/npm/halfmoon@1.1.1/css/halfmoon-variables.min.css'
            media='screen'
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
