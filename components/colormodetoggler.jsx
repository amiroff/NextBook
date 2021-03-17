import { useDarkMode } from 'next-dark-mode'
import { useShortcuts } from 'react-shortcuts-hook'
import { Moon, Sun } from './svgicons'
import { _ } from './text'

function ColorModeToggler() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode()

  const toggleTheme = () => {
    if (darkModeActive) {
      switchToLightMode()
    } else {
      switchToDarkMode()
    }
  }

  useShortcuts(['shift', 'R'], () => toggleTheme(), [darkModeActive])

  return (
    <>
      <div className='mt-5 mr-10 font-size-12 hidden-sm-and-down text-muted'>
        <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>R</kbd>
      </div>
      <button
        className='btn btn-action'
        type='button'
        onClick={toggleTheme}
        title={darkModeActive ? _('Toggle light mode') : _('Toggle dark mode')}
      >
        {darkModeActive ? <Sun /> : <Moon />}
        <span></span>
      </button>
    </>
  )
}

export default ColorModeToggler
