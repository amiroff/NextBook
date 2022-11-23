import SideBarContext from 'components/store/sidebar-context'
import config from 'config/config.json'
import Link from 'next/link'
import { useContext, useEffect, useRef } from 'react'
import { useClickAway, useMedia } from 'react-use'
import SideBarSection from './sidebar-section'

function SideBar() {
  const { branding, toc, projectTitle } = config
  const sideBarCtx = useContext(SideBarContext)
  const isWide = useMedia('(min-width: 770px)', false)
  const ref = useRef(null)

  useEffect(() => {
    if (isWide) {
      sideBarCtx.hideSideBar()
    }
  }, [isWide, sideBarCtx])

  useClickAway(ref, () => {
    if (!isWide) {
      sideBarCtx.hideSideBar()
    }
  })

  const sideBarStyle = sideBarCtx.sideBar
    ? 'sidebar w-2/3 z-50 h-screen bg-gray-100 dark:bg-gray-800 border-r border-gray-300 dark:border-gray-800 fixed pl-4 text-lg top-10 md:hidden'
    : 'sidebar z-50 shrink h-screen fixed top-10 md:top-14 hidden md:block pl-4 pr-4 border-r h-full overflow-y-auto max-w-xs bg-[#ffffff] dark:bg-gray-800'

  return (
    <aside className={sideBarStyle} ref={ref}>
      <div className='w-full'>
        <div className='flex flex-col py-2 md:py-4'>
          {branding?.sidebarTitle && (
            <Link href='/'>
              <a aria-label={branding.sidebarTitle} className="py-8">
                <div className='flex flex-col items-center'>
                  {process.env.NEXT_PUBLIC_USE_LOGO && (
                    <img
                      src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
                      alt={branding.sidebarTitle}
                      className='w-24 hidden md:inline-block'
                    />
                  )}
                  <span
                    className='hidden px-4 text-center md:inline-block font-semibold'
                    title={branding.sidebarTitle}
                  >
                    {branding.sidebarTitle}
                  </span>
                </div>
              </a>
            </Link>
          )}

          <div className='leading-loose tracking-wide'>
            {toc.map((toc, id) => (
              <SideBarSection toc={toc} key={id} />
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideBar
