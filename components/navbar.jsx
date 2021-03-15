import Link from 'next/link'
import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import ColorModeToggler from './colormodetoggler'
import { SideBarContext, ToggleSideBarContext } from './context'
import { Hamburger } from './svgicons'
import { _ } from './text'

function NavBar({ docTitle }) {
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
        <span className='ml-auto mr-auto font-size-14 font-weight-bold app-title my-5 d-none d-md-block'>
          <Link href='/'>
            <a className='text-decoration-none d-flex align-items-center'>
              <img src='/icon.svg' alt='NextBook Logo' width='34px' className='mr-5' />
              {docTitle}
            </a>
          </Link>
        </span>
        <span className='ml-auto mr-auto font-size-13 app-title my-5 d-block d-md-none'>
          <Link href='/'>
            <a className='text-decoration-none d-flex align-items-center'>{docTitle}</a>
          </Link>
        </span>
        <iframe
          src='https://ghbtns.com/github-btn.html?user=amiroff&repo=nextbook&type=star&count=true'
          frameBorder='0'
          scrolling='0'
          width='90'
          height='20'
          title='NextBook on Github'
          className='mt-5 d-none d-md-block'
        ></iframe>
        <div className='navbar-content ml-10 ml-xs-auto'>
          <ColorModeToggler />
        </div>
      </nav>
      <div className='sidebar-overlay' onClick={toggleSideBar}></div>
    </>
  )
}

export default NavBar
