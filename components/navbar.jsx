import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import ColorModeToggler from './colormodetoggler'
import SideBarContext from './context'
import { Hamburger } from './svgicons'
import { _ } from './text'

function NavBar({ title, part }) {
  const sideBarCtx = useContext(SideBarContext)
  useShortcuts(['M'], () => sideBarCtx.toggle(), [sideBarCtx.sidebar])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-content'>
          <button
            id='toggle-sidebar-btn'
            className='btn btn-action'
            type='button'
            onClick={sideBarCtx.toggle}
            title={_('Table Of Contents')}
          >
            <Hamburger />
          </button>
          <div className='ml-10 hidden-sm-and-down text-muted'>
            <kbd className='text-muted font-size-12'>M</kbd>
          </div>
        </div>
        <span className='mx-auto font-weight-bold'>
          <span className='hidden-sm-and-down'>{part && `${part} / `}</span>
          {title}
        </span>
        <div className='navbar-content ml-10 ml-xs-auto'>
          <ColorModeToggler />
        </div>
      </nav>
      <div className='sidebar-overlay' onClick={sideBarCtx.toggleSideBar}></div>
    </>
  )
}

export default NavBar
