import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import HistoryContext from './store/history-context'
import { Check, Dot } from './svg-icons'

const sidebarItemStyle = "flex w-full items-center py-2 px-3 rounded-md text-base hover:bg-gray-100 dark:hover:bg-gray-900 active:opacity-50 transition-opacity duration-200"

const SideBarItem = ({ active, item, onClick, icon }) => {
  const { asPath: path } = useRouter()
  const historyCtx = useContext(HistoryContext)

  const [visited, setVisited] = useState(false)
  const [currentPath, setCurrentPath] = useState(false)


  useEffect(() => {
    if (historyCtx.history.includes(item.path)) {
      setVisited(true)
    }

    setCurrentPath(item.path === path)
  }, [path, historyCtx, item.path])

  return (
    <div className='flex items-center grow mb-1'>
        {item.path ? (
          <Link href={item.path}>
            <a
              style={{userSelect: 'none'}}
              className={`
                ${sidebarItemStyle} 
                ${active && ' font-bold'}
                ${currentPath && ' current font-bold bg-gray-100 dark:bg-gray-900 '}
                ${visited ? ' text-gray-600 dark:text-gray-300' : 'text-gray-400 '}
              `}
              >
              <div className='grow pr-2 break-words w-full truncate'>
                {item.title}
              </div>
              {icon ? (
                <span className='inline-block pr-2' onClick={onClick}>{icon}</span>
                ) : visited && <span className='inline-block pr-2'><Check /></span>} 
            </a>
          </Link>
        ) : (
          <div
            onClick={onClick}
            style={{userSelect: 'none'}}
            className={`${sidebarItemStyle} ${active && 'font-bold'}`}
          >
              <div className='grow pr-2 break-words w-full'>
                {item.title}
              </div>
              {icon &&  <span className='inline-block pr-2'>{icon}</span>}
            </div>
        )}
    </div>
  )
}

export default SideBarItem
