import ColorModeToggler from './colormode-toggler'
import SideBarToggler from './sidebar-toggler'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const { navbarItems, projectTitle } = config
  const router = useRouter()

  return (
    <div className='flex p-2 px-6 items-center'>
      <SideBarToggler />
      <Link href='/'>
        <a href='/'>
          <div className='flex mr-5 items-center'>
            <img
              src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
              alt={projectTitle}
              className='w-8 mr-1 hidden sm:inline-block'
            />
            <span className='hidden sm:inline-block' title={projectTitle}>
              NextBook
            </span>
          </div>
        </a>
      </Link>
      <div className='text-center flex-auto mr-10 space-x-2'>
        {navbarItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`text-sm tracking-wide hover:underline hidden sm:inline-block ${
                router.asPath.includes(item.path) && 'underline'
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
