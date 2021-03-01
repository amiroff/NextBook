import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from 'react-use'
import { useShortcuts } from 'react-shortcuts-hook'
import SideBarItem from './sidebaritem'
import Text, { _ } from './text'

function SideBar({ toc }) {
  const router = useRouter()
  const [chapters, setChapters] = useLocalStorage('visitedChapters', [])
  const [keyword, setKeyword] = useState('')
  const [clearVisible, setClearVisible] = useState(false)
  const [filteredToc, setFilteredToc] = useState(toc)
  const searchInput = useRef(null)

  const focus = () => {
    searchInput.current.focus()
  }

  const clear = () => {
    setKeyword('')
    setClearVisible(false)
    focus()
  }

  useShortcuts(['control', 'shift', 'F'], () => focus())
  useShortcuts(['Escape'], () => clear())

  useEffect(() => {
    // update history array with every page visit
    if (!chapters.includes(router.pathname)) {
      setChapters((prev) => [...new Set([...prev, router.pathname])])
    }
  }, [chapters, router.pathname])

  useEffect(() => {
    if (keyword !== '') {
      // keep only parts with chapters matching search criteria
      const filteredToc = toc.map((item) => {
        const newItem = { part: item.part }
        newItem.chapters = item.chapters.filter(({ title }) =>
          title.toLowerCase().includes(keyword.toLowerCase())
        )
        return newItem
      })
      setClearVisible(true)
      setFilteredToc(filteredToc)
    } else {
      setClearVisible(false)
      setFilteredToc(toc)
    }
  }, [keyword])

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-content'>
          <div className='input-group'>
            <label htmlFor='search' className='sr-only'>
              <Text tid='Search content' />
            </label>
            <input
              id='search'
              className='form-control search'
              type='text'
              placeholder={_('Search content')}
              ref={searchInput}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            {clearVisible && (
              <div className='input-group-append'>
                <button className='btn p-0' type='button' onClick={clear} title={_('Reset search')}>
                  <svg
                    className='w-6 h-6 svg-button'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className='mt-10 font-size-12 hidden-sm-and-down text-muted'>
            <kbd className='text-muted'>ctrl</kbd> + <kbd className='text-muted'>shift</kbd> +{' '}
            <kbd className='text-muted'>F</kbd>
          </div>
        </div>
        <div className='sidebar-menu'>
          {filteredToc.map((toc) => (
            <div key={toc.part}>
              <span className='sidebar-title'>{toc.part}</span>
              <div className='sidebar-divider'></div>
              {toc.chapters?.map((item) => (
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
