import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import SideBarSection from './sidebar-section'
import { GitHub } from './svg-icons'

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
          <div className='font-weight-bold logo'>
            <Link href='/'>
              <a className='text-decoration-none d-flex flex-column text-muted'>
                {process.env.NEXT_PUBLIC_USE_LOGO && (
                  <img
                    src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
                    alt='Logo'
                    className='mb-10 w-100'
                    width='100'
                    height='100'
                  />
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
        {process.env.NEXT_PUBLIC_GITHUB_URL && (
          <div className='sidebar-content d-flex justify-content-center'>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              className='hyperlink text-muted d-flex align-items-center'
              target='_blank'
              rel='noreferrer noopener'
            >
              <GitHub />
              <span className='ml-5 mt-5'>GitHub Repo</span>
            </a>
          </div>
        )}
      </div>
    </>
  )
}

export default SideBar
