import Link from 'next/link'
import SideBarSection from './sidebar-section'
import config from 'config/config.json'

function SideBar() {
  const { projectTitle, toc } = config

  return (
    <div className='pt-6'>
      <Link href='/'>
        <a className='font-semibold flex flex-col items-center text-center'>
          {process.env.NEXT_PUBLIC_USE_LOGO && (
            <img
              src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
              alt='Logo'
              className='mb-5 w-28'
            />
          )}
          {projectTitle}
        </a>
      </Link>

      <div className='mt-10 pl-4 leading-relaxed tracking-wide'>
        {toc.map((toc, id) => (
          <SideBarSection toc={toc} key={id} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
