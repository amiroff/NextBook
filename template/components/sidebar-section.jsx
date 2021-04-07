import { useState } from 'react'
import SideBarItem from './sidebar-item'
import { AngleUp, AngleDown, AngleRight } from './svg-icons'

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
          className={
            isActivePart
              ? 'd-flex justify-content-start m-0 sidebar-title current'
              : 'd-flex justify-content-start m-0 sidebar-title'
          }
          onClick={isActivePart ? () => {} : toggleMenu}
        >
          <div>
            {isActivePart || menuVisible ? <AngleDown /> : <AngleRight />}
          </div>
          <div className='part-title'>{toc.part}</div>
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
