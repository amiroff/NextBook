import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import SideBarItem from './sidebar-item'
import { AngleDown, AngleRight } from './svg-icons'

const SideBarSection = ({ toc }) => {
  const [menuVisible, setMenuVisible] = useState(false)
  const { asPath: path } = useRouter()
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

  // Open part containing current page
  useEffect(() => {
    const currentPart = toc.chapters.some((chapter) => chapter.path === path)
    if (currentPart) {
      setMenuVisible(true)
    }
  }, [path, toc.chapters])

  return (
    <>
      {/* display toggleable titlebar only when we have a part */}
      {toc.part && (
        <div
          className='flex font-medium my-2 ml-2 items-center'
          onClick={toggleMenu}
        >
          <div className='text-gray-400 dark:text-gray-400'>
            {menuVisible ? <AngleDown /> : <AngleRight />}
          </div>
          <div className='pl-2 cursor-pointer select-none'>{toc.part}</div>
        </div>
      )}

      {toc.part ? (
        <div
          className={
            menuVisible
              ? 'block ml-4 pl-2 border-l border-gray-300 dark:border-gray-600'
              : 'hidden'
          }
        >
          {chapterItems}
        </div>
      ) : (
        <div>{chapterItems}</div>
      )}
    </>
  )
}

export default SideBarSection
