import { createContext, useState, useEffect } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

const SideBarContext = createContext({
  sideBar: true,
  toggleSideBar: () => {},
  sideBarProps: {}
})

export function SideBarContextProvider(props) {
  const isWide = useMedia('(min-width: 1024px)')
  const [storedSideBar, setStoredSideBar] = useLocalStorage(
    'sideBar',
    isWide ? true : false
  )
  const [sideBar, setSideBar] = useState(storedSideBar)
  const [sideBarProps, setSideBarProps] = useState(null)

  function toggleSideBar() {
    setStoredSideBar(!sideBar)
    setSideBar((currentValue) => {
      return !currentValue
    })
  }

  useEffect(() => {
    setSideBarProps(sideBar ? {} : { 'data-sidebar-hidden': 'hidden' })
  }, [sideBar])

  const context = {
    sideBar: sideBar,
    toggleSideBar: toggleSideBar,
    sideBarProps: sideBarProps
  }

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext
