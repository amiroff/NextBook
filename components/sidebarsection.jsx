import { useState } from 'react'
import SideBarItem from './sidebaritem'
import { AngleUp, AngleDown } from './svgicons'

const SideBarSection = ({ toc, pathName, history, part }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const isActivePart = toc.part !== undefined && toc.part === part
  const chapterItems = (
    <>
      {toc.chapters?.map((item, id) => (
        <SideBarItem
          item={item}
          pathname={pathName}
          bulletStyle={history.includes(item.path) ? 'check' : null}
          key={id}
        />
      ))}
    </>
  )

  const toggleMenu = () => {
    setMenuVisible((current) => !current)
  }

  return (
    <div
      className={
        isActivePart || menuVisible ? 'sidebar-section open' : 'sidebar-section'
      }
    >
      {/* display toggleable titlebar only when we have a part */}
      {toc.part && (
        <div
          className='d-flex justify-content-between m-0 px-20 sidebar-title font-weight-bold'
          onClick={isActivePart ? () => {} : toggleMenu}
        >
          <div className='part-title'>{toc.part}</div>
          <div>{isActivePart || menuVisible ? <AngleUp /> : <AngleDown />}</div>
        </div>
      )}

      {toc.part ? (
        <div
          className={
            isActivePart || menuVisible
              ? 'part-items open'
              : 'part-items d-none'
          }
        >
          {chapterItems}
        </div>
      ) : (
        <div>{chapterItems}</div>
      )}
    </div>
  )
}

export default SideBarSection
