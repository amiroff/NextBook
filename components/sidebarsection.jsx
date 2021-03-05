import { useEffect, useState } from 'react'
import SideBarItem from './sidebaritem'

const IconRight = () => (
  <svg
    height='16px'
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
    height='16px'
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

  const toggleMenu = () => {
    setMenuVisible((current) => !current)
  }

  useEffect(() => {
    setMenuVisible(toc.part === part)
  }, [])

  return (
    <div className='sidebar-section'>
      <div
        className='d-flex align-items-start sidebar-title font-size-14 font-weight-bold'
        onClick={toggleMenu}
      >
        <div>{menuVisible ? <IconDown /> : <IconRight />}</div>
        <div className='part-title'>{toc.part}</div>
      </div>
      <div className={menuVisible ? '' : 'd-none'}>
        {toc.chapters?.map((item, id) => (
          <SideBarItem item={item} pathname={pathName} history={history} key={id} />
        ))}
      </div>
    </div>
  )
}

export default SideBarSection
