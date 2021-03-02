import Link from 'next/link'
import { useEffect } from 'react'
import { useLocalStorage } from 'react-use'
import ColorModeToggler from './colormodetoggler'
import { useShortcuts } from 'react-shortcuts-hook'
import { _ } from './text'

function NavBar({ docTitle }) {
  const [sideBar, setSideBar] = useLocalStorage('sideBar', true)

  useEffect(() => {
    const pageWrapper = document.getElementsByClassName('page-wrapper')[0]
    if (sideBar) {
      pageWrapper.removeAttribute('data-sidebar-hidden')
    } else {
      pageWrapper.setAttribute('data-sidebar-hidden', 'hidden')
    }
  }, [sideBar])

  useShortcuts(['shift', 'M'], () => setSideBar(!sideBar), [sideBar])

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-content'>
          <button
            id='toggle-sidebar-btn'
            className='btn btn-action'
            type='button'
            onClick={() => setSideBar(!sideBar)}
            title={_('Table Of Contents')}
          >
            <svg
              className='w-6 h-6 svg-button'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <div className='mt-5 ml-10 font-size-12 hidden-sm-and-down text-muted'>
            <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>M</kbd>
          </div>
        </div>
        <span className='ml-auto mr-auto font-weight-bold app-title my-5'>
          <Link href='/'>
            <a className='text-decoration-none'>{docTitle}</a>
          </Link>
        </span>
        <div className='navbar-content ml-10 ml-xs-auto'>
          <ColorModeToggler />
        </div>
      </nav>
      <div className='sidebar-overlay' onClick={() => setSideBar(!sideBar)}></div>
    </>
  )
}

export default NavBar
