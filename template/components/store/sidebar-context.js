import { createContext, useState, useEffect } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

const SideBarContext = createContext({
  sideBar: true,
  toggleSideBar: () => {}
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

  const context = {
    sideBar: sideBar,
    toggleSideBar: toggleSideBar
  }

  return (
    <SideBarContext.Provider value={context}>
      {props.children}
    </SideBarContext.Provider>
  )
}

export default SideBarContext
