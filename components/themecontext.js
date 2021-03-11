import { createContext } from 'react'
import config from '../config.json'

export const ThemeContext = createContext(config.defaultTheme)
export const ToggleThemeContext = createContext(() => {})
