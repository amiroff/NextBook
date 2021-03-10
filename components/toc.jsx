import Link from 'next/link'
import config from '../config.json'
import { useRouter } from 'next/router'
import Text from './text'

function TOC() {
  const { toc } = config
  const router = useRouter()

  return (
    <div className='toc w-400'>
      {toc.map((toc, id) => (
        <>
          <div className='ml-5 mb-10 font-size-22' key={id}>
            {toc.part}
          </div>
          <ul className=''>
            {toc.chapters.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <a href={item.path}>{item.title}</a>
                </Link>
                {item.path === router.pathname && <Text tid='You are here' className='ml-5' />}
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  )
}

export default TOC
