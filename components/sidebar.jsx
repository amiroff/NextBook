import SideBarContext from 'components/store/sidebar-context'
import config from 'config/config.json'
import { useContext } from 'react'
import SideBarSection from './sidebar-section'

function SideBar() {
  const { toc } = config
  const sideBarCtx = useContext(SideBarContext)
  const isBrowser = typeof window !== 'undefined'
  const isWindows =
    isBrowser && window.navigator.appVersion.indexOf('Win') != -1

  return (
    <div
      className={`sidebar z-50 flex-none md:w-56 xl:w-64 h-screen overflow-y-auto fixed top-12  md:block ${
        isBrowser && isWindows
          ? 'scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700'
          : ''
      }
      ${sideBarCtx.sideBar ? 'w-full bg-gray-100 dark:bg-gray-700' : 'hidden'}
    `}
    >
      <div className='mt-6 pl-4 leading-loose tracking-wide'>
        {toc.map((toc, id) => (
          <SideBarSection toc={toc} key={id} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
