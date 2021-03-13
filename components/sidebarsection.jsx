import { useEffect, useState } from 'react'
import SideBarItem from './sidebaritem'

const IconRight = () => (
  <svg
    height='20px'
    className='sidebar-title-icon'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
  </svg>
)

const IconDown = () => (
  <svg
    height='20px'
    className='sidebar-title-icon'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

const SideBarSection = ({ toc, pathName, history, part }) => {
  const [menuVisible, setMenuVisible] = useState(true)
  const [loadingDone, setLoadingDone] = useState(false)

  const chapterItems = (
    <div>
      {toc.chapters?.map((item, id) => (
        <SideBarItem
          item={item}
          pathname={pathName}
          bulletStyle={history.includes(item.path) ? '⭑' : '•'}
          key={id}
        />
      ))}
    </div>
  )

  const toggleMenu = () => {
    setMenuVisible((current) => !current)
  }

  useEffect(() => {
    setMenuVisible(toc.part === part)
    setLoadingDone(true)
  }, [])

  return (
    <div className={loadingDone ? 'sidebar-section' : 'd-none'}>
      {/* display toggleable titlebar only when we have a part */}
      {toc.part && (
        <div
          className='d-flex justify-content-between sidebar-title font-size-15 font-weight-bold'
          onClick={toggleMenu}
        >
          <div className='part-title'>{toc.part}</div>
          <div>{menuVisible ? <IconDown /> : <IconRight />}</div>
        </div>
      )}

      {toc.part ? (
        <div className={menuVisible ? 'part-items' : 'd-none part-items'}>{chapterItems}</div>
      ) : (
        <div>{chapterItems}</div>
      )}
    </div>
  )
}

export default SideBarSection
