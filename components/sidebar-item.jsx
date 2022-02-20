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
        className={`flex items-center pl-2 my-2 text-gray-900 dark:text-gray-50 hover:underline ${
          path === item.path ? 'underline' : ''
        }`}
      >
        <span>{icon}</span>
        <span className='pl-2'>{item.title}</span>
      </a>
    </Link>
  )
}

export default SideBarItem
