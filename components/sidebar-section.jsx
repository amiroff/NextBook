import { useState } from 'react'
import SideBarItem from './sidebar-item'
import { AngleDown, AngleRight } from './svg-icons'

const SideBarSection = ({ toc }) => {
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
    <div className='section'>
      {/* display toggleable titlebar only when we have a part */}
      {toc.part && (
        <div className='flex my-1 items-center' onClick={toggleMenu}>
          <div className=''>{menuVisible ? <AngleDown /> : <AngleRight />}</div>
          <div className='pl-2 cursor-pointer'>{toc.part}</div>
        </div>
      )}

      {toc.part ? (
        <div className={menuVisible ? 'block ml-3' : 'hidden'}>
          {chapterItems}
        </div>
      ) : (
        <div>{chapterItems}</div>
      )}
    </div>
  )
}

export default SideBarSection
