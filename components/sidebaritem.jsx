import Link from 'next/link'
import { useEffect, useState } from 'react'

const SideBarItem = ({ history, item, pathname }) => {
  const [bulletStyle, setBulletStyle] = useState('◦')

  const classnameActive =
    pathname === item.path
      ? 'sidebar-link sidebar-link-with-icon align-items-baseline active'
      : 'sidebar-link sidebar-link-with-icon align-items-baseline'

  useEffect(() => {
    // using useEffect because localstorage is not available at build time
    if (history.includes(item.path)) {
      setBulletStyle('•')
    }
  }, [history, item])

  return (
    <Link href={item.path} key={item.path}>
      <a className={classnameActive}>
        <span className='sidebar-icon bg-transparent'>
          <i className={bulletStyle === '•' ? 'text-primary' : ''} aria-hidden='true'>
            {bulletStyle}
          </i>
        </span>
        {item.title}
      </a>
    </Link>
  )
}

export default SideBarItem
