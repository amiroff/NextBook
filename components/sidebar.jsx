import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import { useLocalStorage } from 'react-use'
import SideBarSection from './sidebarsection'
import Text, { _ } from './text'

function SideBar({ toc, part }) {
  const router = useRouter()
  const [chapters, setChapters] = useLocalStorage('visitedChapters', [])
  const [keyword, setKeyword] = useState('')
  const [filteredToc, setFilteredToc] = useState(toc)
  const searchInput = useRef(null)

  const focus = () => {
    searchInput.current.focus()
  }

  useShortcuts(['control', 'shift', 'F'], () => focus())

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
      setFilteredToc(filteredToc)
    } else {
      setFilteredToc(toc)
    }
  }, [keyword])

  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-content'>
          <label htmlFor='search' className='sr-only'>
            <Text tid='Filter content' />
          </label>
          <input
            id='search'
            className='form-control search rounded font-size-14'
            type='search'
            placeholder={_('Filter content')}
            ref={searchInput}
            value={keyword}
            autoComplete='off'
            onChange={(e) => setKeyword(e.target.value)}
          />
          <div className='mt-10 font-size-12 hidden-sm-and-down text-muted'>
            <kbd className='text-muted'>ctrl</kbd> + <kbd className='text-muted'>shift</kbd> +{' '}
            <kbd className='text-muted'>F</kbd>
          </div>
        </div>
        <div className='sidebar-menu'>
          {filteredToc.map((toc, id) => (
            <SideBarSection
              toc={toc}
              part={part}
              pathName={router.pathname}
              history={chapters}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default SideBar
