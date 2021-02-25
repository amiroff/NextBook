import Link from 'next/link'
import tocContent from '../toc.json'

function TOC() {
  const { toc } = tocContent
  return (
    <div className='toc w-400'>
      {toc.map((toc) => (
        <div key={toc.part} className='m-10'>
          <h4 className='mt-20 mb-10'>{toc.part}</h4>
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
