import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import Search from './search'
import SideBarItem from './sidebaritem'

function SideBar({ toc }) {
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
        <Search />
        <div className='sidebar-menu'>
          {toc.map((toc) => (
            <div key={toc.part}>
              <h4 className='sidebar-title'>{toc.part}</h4>
              <div className='sidebar-divider'></div>
              {toc.chapters.map((item) => (
                <SideBarItem
                  item={item}
                  pathname={router.pathname}
                  history={chapters}
                  key={item.path}
                />
              ))}
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SideBar
