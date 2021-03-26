import Link from 'next/link'
import { Check } from './svg-icons'

const SideBarItem = ({ bulletStyle, item, pathname }) => {
  const classnameActive =
    pathname === item.path
      ? 'sidebar-link sidebar-link-with-icon active'
      : 'sidebar-link sidebar-link-with-icon'

  return (
    <Link href={item.path} key={item.path}>
      <a className={classnameActive}>
        <span className='sidebar-icon bg-transparent'>
          {bulletStyle === 'check' ? <Check /> : null}
        </span>
        {item.title}
      </a>
    </Link>
  )
}

export default SideBarItem
