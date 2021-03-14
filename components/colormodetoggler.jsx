import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import { ThemeContext, ToggleThemeContext } from './context'
import { Moon, Sun } from './svgicons'
import Text, { _ } from './text'

function ColorModeToggler() {
  const theme = useContext(ThemeContext)
  const toggleTheme = useContext(ToggleThemeContext)

  useShortcuts(['shift', 'R'], () => toggleTheme(), [theme])

  return (
    <>
      <div className='mt-5 mr-10 font-size-12 hidden-sm-and-down text-muted'>
        <kbd className='text-muted'>shift</kbd> + <kbd className='text-muted'>R</kbd>
      </div>
      <button
        className='btn btn-action'
        type='button'
        onClick={toggleTheme}
        title={_('Toggle color mode')}
      >
        <div className='hidden-dm'>
          <Moon />
          <span className='sr-only'>
            <Text tid='Toggle dark mode' />
          </span>
        </div>
        <div className='hidden-lm'>
          <Sun />
          <span className='sr-only'>
            <Text tid='Toggle light mode' />
          </span>
        </div>
      </button>
    </>
  )
}

export default ColorModeToggler
