import Link from 'next/link'
import config from '../config.json'

function TOC() {
  const { toc } = config
  return (
    <div className='toc w-400'>
      {toc.map((toc) => (
        <div key={toc.part} className='m-10'>
          <div className='mt-20 mb-10 text-24 font-size-22'>{toc.part}</div>
          <ul>
            {toc.chapters.map((item) => (
              <li key={item.path}>
                <Link href={item.path}>
                  <a href={item.path} className='hyperlink'>
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default TOC
