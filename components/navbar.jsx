import ColorModeToggler from './colormode-toggler'
import SideBarToggler from './sidebar-toggler'
import config from 'config/config.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const { navbarItems } = config
  const router = useRouter()

  return (
    <div className='flex p-2 px-3 items-center'>
      {/* <SideBarToggler /> */}
      <div className='flex mr-5 items-center'>
        <img
          src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
          alt='Logo'
          className='w-8 mr-1'
        />
        <span>NextBook</span>
      </div>
      <div className='text-center flex-auto mr-10 space-x-2'>
        {navbarItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <a
              className={`text-sm tracking-wide hover:underline hidden md:inline-block ${
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
