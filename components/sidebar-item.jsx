import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import HistoryContext from './store/history-context'
import { Check, Dot } from './svg-icons'

const SideBarItem = ({ item }) => {
  const router = useRouter()
  const historyCtx = useContext(HistoryContext)
  const classnameActive = `sidebar-link sidebar-link-with-icon ${
    router.asPath === item.path ? 'current' : ''
  }`

  return (
    <Link href={item.path} key={item.path}>
      <a className={classnameActive}>
        <span className='sidebar-icon bg-transparent'>
          {historyCtx.history.includes(item.path) ? <Check /> : <Dot />}
        </span>
        {item.title}
      </a>
    </Link>
  )
}

export default SideBarItem
