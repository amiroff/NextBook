import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import ThemeContext from './store/theme-context'
import { Moon, Sun } from './svg-icons'

import { _ } from './text'

function ColorModeToggler() {
  const themeCtx = useContext(ThemeContext)
  useShortcuts(['T'], () => themeCtx.toggleTheme(), [themeCtx.theme])

  return (
    <>
      <div className='mr-10 hidden-sm-and-down text-muted'>
        <kbd className='text-muted font-size-12'>T</kbd>
      </div>
      <button
        className='btn btn-action'
        type='button'
        onClick={themeCtx.toggleTheme}
        title={
          themeCtx.darkModeActive
            ? _('Toggle light mode')
            : _('Toggle dark mode')
        }
      >
        {themeCtx.darkModeActive ? <Sun /> : <Moon />}
        <span></span>
      </button>
    </>
  )
}

export default ColorModeToggler
