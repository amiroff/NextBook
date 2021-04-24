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
      <kbd className='hidden sm:inline-block'>T</kbd>
      <button
        onClick={themeCtx.toggleTheme}
        title={
          themeCtx.theme === 'dark'
            ? _('Toggle light mode')
            : _('Toggle dark mode')
        }
        className='border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded p-1 focus:outline-none  w-7 h-7'
      >
        {themeCtx.theme === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  )
}

export default ColorModeToggler
