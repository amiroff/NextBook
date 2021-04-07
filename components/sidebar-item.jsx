import Link from 'next/link'
import { Check, Dot } from './svg-icons'

const SideBarItem = ({ bulletStyle, item, pathname }) => {
  const classnameActive =
    pathname === item.path
      ? 'sidebar-link sidebar-link-with-icon current open'
      : 'sidebar-link sidebar-link-with-icon'

  return (
    <Link href={item.path} key={item.path}>
      <a className={classnameActive}>
        <span className='sidebar-icon bg-transparent'>
          {bulletStyle === 'check' ? <Check /> : <Dot />}
        </span>
        {item.title}
      </a>
    </Link>
  )
}

export default SideBarItem
