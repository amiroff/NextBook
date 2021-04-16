import Link from 'next/link'
import SideBarSection from './sidebar-section'
import { GitHub } from './svg-icons'

function SideBar({ toc, part, docTitle, className }) {
  return (
    <div className={className}>
      <div className='sidebar-content'>
        <div className='logo'>
          <Link href='/'>
            <a className='text-decoration-none d-flex align-items-center text-center flex-column'>
              {process.env.NEXT_PUBLIC_USE_LOGO && (
                <img
                  src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
                  alt='Logo'
                  className='mb-10 w-100'
                  width='100'
                  height='100'
                />
              )}
              {docTitle}
            </a>
          </Link>
        </div>
      </div>
      <div className='sidebar-menu'>
        {toc.map((toc, id) => (
          <SideBarSection toc={toc} part={part} key={id} />
        ))}
      </div>
      {process.env.NEXT_PUBLIC_GITHUB_URL && (
        <div className='sidebar-content d-flex justify-content-center'>
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            className='hyperlink d-flex align-items-center'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GitHub />
            <span className='ml-5 mt-5'>GitHub Repo</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default SideBar
