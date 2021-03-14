import { useEffect, useState } from 'react'
import SideBarItem from './sidebaritem'
import { AngleDown, AngleRight } from './svgicons'

const SideBarSection = ({ toc, pathName, history, part }) => {
  const [menuVisible, setMenuVisible] = useState(true)
  const [loadingDone, setLoadingDone] = useState(false)

  const chapterItems = (
    <div>
      {toc.chapters?.map((item, id) => (
        <SideBarItem
          item={item}
          pathname={pathName}
          bulletStyle={history.includes(item.path) ? 'check' : 'bullet'}
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
          <div>{menuVisible ? <AngleDown /> : <AngleRight />}</div>
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
