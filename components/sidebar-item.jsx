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
    <div className='flex items-center pl-2 my-2'>
      <span>{icon}</span>
      <Link href={item.path}>
        <a
          className={`text-base pl-2 hover:underline ${
            path === item.path ? 'underline' : ''
          }`}
        >
          {item.title}
        </a>
      </Link>
    </div>
  )
}

export default SideBarItem
