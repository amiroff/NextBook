// This is the global layout used by whole app

import NavBar from 'components/navbar'
import SideBar from 'components/sidebar'
import { NextSeo } from 'next-seo'
import Head from 'next/head'
import config from '../config.json'

export default function Layout({ title, description, children }) {
  const { projectTitle, projectURL, projectDescription, toc } = config

  return (
    <div
      className='page-wrapper with-navbar with-sidebar with-transitions'
      data-sidebar-type='overlayed-sm-and-down'
    >
      <NextSeo
        title={title}
        description={description ? description : projectDescription}
        openGraph={{
          type: 'book',
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
      </Head>
      <NavBar docTitle={projectTitle} />
      <SideBar toc={toc} />
      <div className='content-wrapper'>{children}</div>
    </div>
  )
}
