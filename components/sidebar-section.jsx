import { useState } from 'react'
import SideBarItem from './sidebar-item'
import { AngleDown, AngleRight } from './svg-icons'

const SideBarSection = ({ toc, part }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const chapterItems = (
    <>
      {toc.chapters?.map((item, id) => (
        <SideBarItem item={item} key={id} />
      ))}
    </>
  )

  const toggleMenu = () => {
    setMenuVisible((current) => !current)
  }

  return (
    <div className='sidebar-section'>
      {/* display toggleable titlebar only when we have a part */}
      {toc.part && (
        <div
          className='d-flex justify-content-start m-0 sidebar-title'
          onClick={toggleMenu}
        >
          <div>{menuVisible ? <AngleDown /> : <AngleRight />}</div>
          <div className='part-title'>{toc.part}</div>
        </div>
      )}

      {toc.part ? (
        <div className={menuVisible ? 'part-items' : 'part-items d-none'}>
          {chapterItems}
        </div>
      ) : (
        <div>{chapterItems}</div>
      )}
    </div>
  )
}

export default SideBarSection
