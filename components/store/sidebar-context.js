import { createContext, useState, useEffect } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

const SideBarContext = createContext({
  sideBar: true,
  sideBarProps: {},
  toggleSideBar: () => {}
})

export function SideBarContextProvider(props) {
  const isWide = useMedia('(min-width: 1024px)')
  const [storedSideBar, setStoredSideBar] = useLocalStorage(
    'sideBar',
    isWide ? true : false
  )
  const [sideBar, setSideBar] = useState(storedSideBar)
  const [sideBarProps, setSideBarProps] = useState(
    storedSideBar ? {} : { 'data-sidebar-hidden': 'hidden' }
  )

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
    sideBar: sideBar,
    sideBarProps: sideBarProps,
    toggleSideBar: toggleSideBar
  }

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext
