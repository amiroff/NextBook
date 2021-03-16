import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import config from '../config.json'
import SideBarSection from './sidebarsection'
import { GitHub } from './svgicons'

function SideBar({ toc, part, docTitle }) {
  const router = useRouter()
  const [chapters, setChapters] = useLocalStorage('visitedChapters', [])

  useEffect(() => {
    // update history array with every page visit
    if (!chapters.includes(router.pathname)) {
      setChapters((prev) => [...new Set([...prev, router.pathname])])
    }
  }, [chapters, router.pathname])

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-content'>
          <div className='mx-auto my-20 font-size-14 font-weight-bold'>
            <Link href='/'>
              <a className='text-decoration-none d-flex flex-column align-items-center'>
                {config.useTitleLogo && (
                  <img src='/icon.svg' alt='NextBook Logo' className='mb-10 w-100' />
                )}
                {docTitle}
              </a>
            </Link>
          </div>
        </div>
        <div className='sidebar-menu'>
          {toc.map((toc, id) => (
            <SideBarSection
              toc={toc}
              part={part}
              pathName={router.pathname}
              history={chapters}
              key={id}
            />
          ))}
        </div>
        {config.GitHubURL && (
          <div className='sidebar-content d-flex justify-content-center'>
            <a
              href={config.GitHubURL}
              className='hyperlink text-muted d-flex align-items-center'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GitHub />
              <span className='ml-5 mt-5'>GitHub</span>
            </a>
          </div>
        )}
      </div>
    </>
  )
}

export default SideBar
