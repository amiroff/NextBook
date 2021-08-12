import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import HistoryContext from './store/history-context'
import { Check, Dot } from './svg-icons'

const SideBarItem = ({ item }) => {
  const { asPath: path } = useRouter()
  const historyCtx = useContext(HistoryContext)

  const [icon, setIcon] = useState(<Dot />)

  useEffect(() => {
    if (historyCtx.history.includes(item.path)) {
      setIcon(<Check />)
    }
  }, [path, historyCtx, item.path])

  return (
    <Link href={item.path}>
      <a
        className={`flex items-center font-normal pl-2 my-1 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${
          path === item.path
            ? 'text-gray-900 dark:text-gray-50 bg-gray-300 dark:bg-gray-700'
            : 'text-gray-700 dark:text-gray-50'
        }`}
      >
        <span
          className={
            path === item.path
              ? 'text-gray-900 dark:text-gray-50'
              : 'text-gray-500 dark:text-gray-300'
          }
        >
          {icon}
        </span>
        <span className='pl-2'>{item.title}</span>
      </a>
    </Link>
  )
}

export default SideBarItem
