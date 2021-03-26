import { createContext, useState, useEffect } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

const SideBarContext = createContext({
  props: {},
  toggle: () => {}
})

export function SideBarContextProvider(props) {
  const isWide = useMedia('(min-width: 1024px)')
  const [storedSideBar, setStoredSideBar] = useLocalStorage(
    'sideBar',
    isWide ? true : false
  )
  const [sideBar, setSideBar] = useState(storedSideBar)
  const [sideBarProps, setSideBarProps] = useState({})

  useEffect(() => {
    setStoredSideBar(sideBar)
    setSideBarProps(sideBar ? {} : { 'data-sidebar-hidden': 'hidden' })
  }, [sideBar])

  function toggleSideBar() {
    setSideBar((currentValue) => {
      return !currentValue
    })
  }

  const context = {
    props: sideBarProps,
    toggle: toggleSideBar
  }

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext
