import Link from 'next/link'
import { useEffect, useState } from 'react'

const SideBarItem = ({ history, item, pathname }) => {
  const [bulletStyle, setBulletStyle] = useState('•')

  const classnameActive =
    pathname === item.path
      ? 'sidebar-link font-size-14 sidebar-link-with-icon active'
      : 'sidebar-link font-size-14 sidebar-link-with-icon'

  useEffect(() => {
    // using useEffect because localstorage is not available at build time
    if (history.includes(item.path)) {
      setBulletStyle('⭑')
    }
  }, [history, item])

  return (
    <Link href={item.path} key={item.path}>
      <a className={classnameActive}>
        <span className='sidebar-icon bg-transparent'>
          <span aria-hidden='true'>{bulletStyle}</span>
        </span>
        {item.title}
      </a>
    </Link>
  )
}

export default SideBarItem
