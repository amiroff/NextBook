import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import ThemeContext from './store/theme-context'
import { Moon, Sun } from './svg-icons'

import { _ } from './text'

function ColorModeToggler() {
  const themeCtx = useContext(ThemeContext)
  useShortcuts(['T'], () => themeCtx.toggleTheme(), [themeCtx.theme])

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={themeCtx.toggleTheme}
        title={
          themeCtx.theme === 'dark'
            ? _('Toggle light mode')
            : _('Toggle dark mode')
        }
        className='shadow bg-gray-100 text-gray-600 dark:text-gray-400 dark:bg-gray-700 rounded p-1 mr-1 md:mr-7 focus:outline-none w-8 h-8'
      >
        {themeCtx.theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}

export default ColorModeToggler
