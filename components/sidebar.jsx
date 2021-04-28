import SideBarContext from 'components/store/sidebar-context'
import config from 'config/config.json'
import Link from 'next/link'
import { useContext } from 'react'
import SideBarSection from './sidebar-section'

function SideBar() {
  const { toc, projectTitle } = config
  const sideBarCtx = useContext(SideBarContext)

  return (
    <div className='sidebar z-50 flex-none md:w-56 xl:w-64 h-screen overflow-y-auto fixed top-12 md:top-14 hidden md:block'>
      <div className='flex flex-col mt-10'>
        <Link href='/'>
          <a href='/' aria-label={projectTitle}>
            <div className='flex flex-col items-center'>
              {process.env.NEXT_PUBLIC_USE_LOGO && (
                <img
                  src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
                  alt={projectTitle}
                  className='w-24 hidden md:inline-block'
                />
              )}
              <span
                className='hidden text-center md:inline-block font-semibold '
                title={projectTitle}
              >
                {projectTitle}
              </span>
            </div>
          </a>
        </Link>
        <div className='mt-6 pl-2 leading-loose tracking-wide'>
          {toc.map((toc, id) => (
            <SideBarSection toc={toc} key={id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SideBar
