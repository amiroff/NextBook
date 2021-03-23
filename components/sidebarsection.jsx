import { useEffect, useState } from 'react'
import SideBarItem from './sidebaritem'
import { AngleDown, AngleRight } from './svgicons'

const SideBarSection = ({ toc, pathName, history, part }) => {
  const [menuVisible, setMenuVisible] = useState(true)

  const chapterItems = (
    <>
      {toc.chapters?.map((item, id) => (
        <SideBarItem
          item={item}
          pathname={pathName}
          bulletStyle={history.includes(item.path) ? 'check' : 'bullet'}
          key={id}
        />
      ))}
    </>
  )

  const toggleMenu = () => {
    setMenuVisible((current) => !current)
  }

  useEffect(() => {
    setMenuVisible(toc.part !== undefined && toc.part === part)
  }, [])

  return (
    <div className={menuVisible ? 'sidebar-section open' : 'sidebar-section'}>
      {/* display toggleable titlebar only when we have a part */}
      {toc.part && (
        <div
          className='d-flex justify-content-between m-0 px-20 sidebar-title font-weight-bold'
          onClick={toggleMenu}
        >
          <div className='part-title'>{toc.part}</div>
          <div>{menuVisible ? <AngleDown /> : <AngleRight />}</div>
        </div>
      )}

      {toc.part ? (
        <div className={menuVisible ? 'part-items open' : 'd-none part-items'}>
          {chapterItems}
        </div>
      ) : (
        <div>{chapterItems}</div>
      )}
    </div>
  )
}

export default SideBarSection
