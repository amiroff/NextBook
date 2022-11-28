import InPageToc from 'components/in-page-toc'
import PageNav from 'components/page-nav'
import Text from 'components/text'
import GlobalLayout from 'layouts/global'
import { useEffect, useState } from 'react'

export default function DocumentLayout({ children, frontMatter }) {
  const showToc = !frontMatter.hide_toc && frontMatter.tocRaw.length > 0
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const [locale, setLocale] = useState('en')
  const { title, part, description, tags, updated, tocRaw } = frontMatter
  const [toc, setToc] = useState(tocRaw)

  useEffect(() => {
    const browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages
    if (browserLocales[0] !== undefined) {
      setLocale(browserLocales[0])
    }
  }, [])

  useEffect(() => {
    setToc(tocRaw)
  }, [tocRaw])

  return (
    <GlobalLayout title={title} part={part} description={description}>
      <div className='content-container flex grow'>
        <div
          className='content px-4 md:px-14 xl:px-20 grow shrink'
        >
          {title && <h1>{title}</h1>}
          {description && <p className='my-1'>{description}</p>}
          
          {tags && (
            <div className='my-2 text-sm 2xl:text-base'>
              <span>
                <Text tid='Tags' />:
              </span>
              {tags.map((tag) => (
                <span
                  className='bg-gray-300 dark:bg-gray-700 rounded m-1 p-1 text-xs'
                  key={tag}
                >
                  {`#${tag}`}
                </span>
              ))}
            </div>
          )}

          <div className='md-content'>{children}</div>
          <hr className='my-3 mx-1 print:hidden border-gray-300 dark:border-gray-600' />
          {updated && (
            <div className='text-center text-xs'>
              <Text tid='Last Update' />:{' '}
              {new Date(updated).toLocaleDateString(
                locale || 'en',
                dateOptions
              )}
            </div>
          )}
          <PageNav />
        </div>
        {showToc && (
          <div className='toc-container hidden lg:block grow shrink-0 basis-80'>
            <div className='toc sticky top-20'>
              <InPageToc tocRaw={toc} />
            </div>
          </div>
        )}
      </div>
    </GlobalLayout>
  )
}
