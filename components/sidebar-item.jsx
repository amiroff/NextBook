import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HistoryContext from './store/history-context'
import { Check, Dot } from './svg-icons'

const SideBarItem = ({ item }) => {
  const router = useRouter()
  const historyCtx = useContext(HistoryContext)

  return (
    <Link href={item.path} key={item.path}>
      <a
        className={`flex items-center pl-1 ${
          router.asPath === item.path ? 'text-black dark:text-white' : ''
        }`}
      >
        <span className='text-gray-400'>
          {historyCtx.history.includes(item.path) ? <Check /> : <Dot />}
        </span>
        <span className='pl-2'>{item.title}</span>
      </a>
    </Link>
  )
}

export default SideBarItem
