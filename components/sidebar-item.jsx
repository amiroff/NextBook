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
            ? 'rounded bg-gradient-to-r from-gray-300 dark:from-gray-600'
            : ''
        }`}
      >
        <span className='text-gray-500 dark:text-gray-400'>
          {historyCtx.history.includes(item.path) ? <Check /> : <Dot />}
        </span>
        <span className='pl-2'>{item.title}</span>
      </a>
    </Link>
  )
}

export default SideBarItem
