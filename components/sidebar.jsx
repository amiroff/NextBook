import Link from 'next/link'
import SideBarSection from './sidebar-section'
import { GitHub } from './svg-icons'
import config from 'config/config.json'
import { useRouter } from 'next/router'

function SideBar() {
  const { projectTitle, toc } = config

  const router = useRouter()
  return (
    <div className='pt-6'>
      <Link href='/'>
        <a className='font-bold flex flex-col items-center text-center'>
          {process.env.NEXT_PUBLIC_USE_LOGO && (
            <img
              src={`/${process.env.NEXT_PUBLIC_USE_LOGO}`}
              alt='Logo'
              className='mb-5 w-28'
              width='112'
              height='112'
            />
          )}
          {projectTitle}
        </a>
      </Link>

      <div className='mt-10'>
        {toc.map((toc, id) => (
          <SideBarSection toc={toc} key={id} />
        ))}
      </div>

      {process.env.NEXT_PUBLIC_GITHUB_URL && (
        <div className='mt-10'>
          <a
            className='flex flex-col items-center'
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target='_blank'
            rel='noreferrer noopener'
          >
            <GitHub />
            <span className='text-xs mt-2 underline'>GitHub Repo</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default SideBar
