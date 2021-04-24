import { createContext, useState, useEffect } from 'react'
import { useLocalStorage } from 'react-use'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
})

export function ThemeContextProvider(props) {
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', 'light')
  const [theme, setTheme] = useState(storedTheme)

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setStoredTheme(newTheme)
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  const context = {
    theme: theme,
    toggleTheme: toggleTheme
  }

  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
