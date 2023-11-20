import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SideBarItem from './sidebar-item'
import { AngleDown, AngleRight } from './svg-icons'

const SideBarSection = ({ toc }) => {
  const [menuVisible, setMenuVisible] = useState(toc.openByDefault || false)
  const [menuActive, setMenuActive] = useState(false)
  const { asPath: path } = useRouter()
  const chapterItems = (
    <>
      {toc.chapters?.map((item, id) => (
        <SideBarItem item={item} key={id} />
      ))}
    </>
  )

  const toggleMenu = (e) => {
    e.preventDefault()
    setMenuVisible((current) => !current)
  }

  // Open part containing current page
  useEffect(() => {
    setMenuActive(false)
    const currentPart = toc.chapters.some((chapter) => chapter.path === path)
    if (currentPart) {
      setMenuVisible(true)
    }
    setMenuActive(currentPart)
  }, [path, toc.chapters])

  if(toc.part) {
    return (
       <div className='text-sm'>
        {/* display toggleable titlebar only when we have a part */}
        <div className='flex w-full items-center cursor-pointer select-none' >
            <SideBarItem item={{title: toc.part, path: toc.path || ''}} onClick={toggleMenu} active={menuActive} icon={menuVisible ? <AngleDown /> : <AngleRight />} />
        </div>
        <div className={menuVisible ? 'block ml-4 border-l border-gray-300 pl-2' : 'hidden'}>
          {chapterItems}
        </div>
      </div>
    )
  } 

  return ( <div className='text-sm'>{chapterItems}</div>)
}

export default SideBarSection
