import { Hamburger } from './svg-icons'
import { useContext } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import SideBarContext from './store/sidebar-context'
import { _ } from 'components/text'

const SideBarToggler = () => {
  const sideBarCtx = useContext(SideBarContext)
  useShortcuts(['M'], () => sideBarCtx.toggleSideBar(), [sideBarCtx.sideBar])

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={sideBarCtx.toggleSideBar}
        title={_('Table Of Contents')}
        className='border sm:hidden border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded p-1 focus:outline-none w-8 h-8'
      >
        <Hamburger />
      </button>
    </div>
  )
}

export default SideBarToggler
