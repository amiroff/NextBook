import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import ColorModeToggler from './colormodetoggler'
import { SideBarContext, ToggleSideBarContext } from './context'
import { Hamburger } from './svgicons'
import { _ } from './text'

function NavBar({ title }) {
  const sideBar = useContext(SideBarContext)
  const toggleSideBar = useContext(ToggleSideBarContext)

  useShortcuts(['shift', 'M'], () => toggleSideBar(), [sideBar])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-content'>
          <button
            id='toggle-sidebar-btn'
            className='btn btn-action'
            type='button'
            onClick={toggleSideBar}
            title={_('Table Of Contents')}
          >
            <Hamburger />
          </button>
          <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
            <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>M</kbd>
          </div>
        </div>
        <span className='mx-auto font-size-13'>{title}</span>
        <div className='navbar-content ml-10 ml-xs-auto'>
          <ColorModeToggler />
        </div>
      </nav>
      <div className='sidebar-overlay' onClick={toggleSideBar}></div>
    </>
  )
}

export default NavBar
