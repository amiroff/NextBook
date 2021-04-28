import { createContext, useState, useEffect } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

const SideBarContext = createContext({
  sideBar: true,
  toggleSideBar: () => {},
  hideSideBar: () => {}
})

export function SideBarContextProvider(props) {
  const isWide = useMedia('(min-width: 1024px)')
  const [storedSideBar, setStoredSideBar] = useLocalStorage(
    'sideBar',
    isWide ? true : false
  )
  const [sideBar, setSideBar] = useState(storedSideBar)

  function toggleSideBar() {
    setStoredSideBar(!sideBar)
    setSideBar((currentValue) => {
      return !currentValue
    })
  }

  function hideSideBar() {
    setStoredSideBar(false)
    setSideBar(false)
  }

  const context = {
    sideBar: sideBar,
    toggleSideBar: toggleSideBar,
    hideSideBar: hideSideBar
  }

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext
