import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HistoryContext from './store/history-context'
import { Check, Dot } from './svg-icons'

const SideBarItem = ({ item }) => {
  const { asPath: path } = useRouter()
  const historyCtx = useContext(HistoryContext)

  return (
    <Link href={item.path} key={item.path}>
      <a
        className={`flex items-center pl-1 ${
          path === item.path
            ? 'rounded text-gray-700 dark:text-gray-100 bg-gradient-to-b from-gray-300 dark:from-gray-700'
            : 'text-gray-500 dark:text-gray-400'
        }`}
      >
        <span
          className={
            path === item.path
              ? 'text-gray-700 dark:text-gray-100'
              : 'text-gray-400 dark:text-gray-400'
          }
        >
          {historyCtx.history.includes(item.path) ? <Check /> : <Dot />}
        </span>
        <span className='pl-2'>{item.title}</span>
      </a>
    </Link>
  )
}

export default SideBarItem
