import Link from 'next/link'
import { Check, Dot } from './svgicons'

const SideBarItem = ({ bulletStyle, item, pathname }) => {
  const classnameActive =
    pathname === item.path
      ? 'sidebar-link pl-5 font-size-14 sidebar-link-with-icon active'
      : 'sidebar-link pl-5 font-size-14 sidebar-link-with-icon'

  return (
    <Link href={item.path} key={item.path}>
      <a className={classnameActive}>
        <span className='sidebar-icon bg-transparent'>
          <span aria-hidden='true'>{bulletStyle === 'check' ? <Check /> : <Dot />}</span>
        </span>
        {item.title}
      </a>
    </Link>
  )
}

export default SideBarItem
