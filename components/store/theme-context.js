import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from 'react-use'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  darkModeActive: false
})

export function ThemeContextProvider(props) {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', 'light')
  const [theme, setTheme] = useState(storedTheme)
  const darkModeActive = theme === 'dark'

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setStoredTheme(newTheme)
    setTheme(newTheme)
  }

  const context = {
    theme: theme,
    toggleTheme: toggleTheme,
    darkModeActive: darkModeActive
  }

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
