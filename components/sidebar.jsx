import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import SideBarSection from './sidebarsection'
import Link from 'next/link'
import config from '../config.json'

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
        <div className='mx-auto w-100'>
          <iframe
            src='https://ghbtns.com/github-btn.html?user=amiroff&repo=nextbook&type=star&count=true'
            frameBorder='0'
            scrolling='0'
            width='90'
            height='20'
            title='NextBook on Github'
            className='mt-5 d-none d-md-block'
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default SideBar
