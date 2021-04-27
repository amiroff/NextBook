import ColorModeToggler from './colormode-toggler'
import SideBarToggler from './sidebar-toggler'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const { navbarItems, projectTitle } = config
  const router = useRouter()

  return (
    <div className='flex pt-1 px-6 items-end text-xs lg:text-sm'>
      <SideBarToggler />
      <Link href='/'>
        <a href='/'>
          <div className='flex mr-5 items-center'>
            {process.env.NEXT_PUBLIC_USE_LOGO && (
              <img
                src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
                alt={projectTitle}
                className='w-8 mr-1 hidden md:inline-block'
              />
            )}
            <span
              className='hidden md:inline-block font-semibold '
              title={projectTitle}
            >
              {projectTitle}
            </span>
          </div>
        </a>
      </Link>
      <div className='text-right text-xs lg:text-sm mr-6 pt-1 flex-auto space-x-2'>
        {navbarItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`border border-transparent hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600
               dark:hover:text-white px-2 py-2 rounded-md font-medium hidden md:inline-block ${
                 router.asPath.includes(item.path)
                   ? 'dark:bg-gray-600 dark:text-white bg-gray-200 text-black'
                   : 'dark:text-gray-300 text-gray-600'
               }`}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </div>
      <ColorModeToggler />
    </div>
  )
}

export default NavBar
