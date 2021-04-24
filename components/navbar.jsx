import ColorModeToggler from './colormode-toggler'
import SideBarToggler from './sidebar-toggler'

function NavBar({ title, part }) {
  return (
    <div className='flex p-2 items-center'>
      <SideBarToggler />
      <span className='flex-auto text-center'>
        <span className='hidden md:inline-block'>{part && `${part} / `}</span>{' '}
        {title}
      </span>
      <ColorModeToggler />
    </div>
  )
}

export default NavBar
