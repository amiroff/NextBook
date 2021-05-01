import ColorModeToggler from './colormode-toggler'
import SideBarToggler from './sidebar-toggler'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const { navbarItems } = config
  const router = useRouter()

  return (
    <div className='flex pt-1 text-xs lg:text-sm'>
      <SideBarToggler />
      <nav className='text-left text-xs lg:text-sm ml-6 pt-1 flex-auto space-x-1'>
        {navbarItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`border border-transparent hover:bg-gray-300 hover:text-gray-700 dark:hover:bg-gray-600
               dark:hover:text-gray-50 px-2 py-2 rounded-md font-medium hidden md:inline-block ${
                 router.query.part && item.path.includes(router.query.part)
                   ? 'dark:bg-gray-700 dark:text-gray-50 bg-gray-300 text-gray-700'
                   : 'dark:text-gray-300 text-gray-600'
               }`}
            >
              {item.title}
            </a>
          </Link>
        ))}
      </nav>
      <ColorModeToggler />
    </div>
  )
}

export default NavBar
