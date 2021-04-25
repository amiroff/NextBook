import InPageToc from 'components/in-page-toc'
import PageNav from 'components/page-nav'
import Text from 'components/text'
import DocumentLayout from 'layouts/document'
import { useEffect, useState } from 'react'

export default function DocsLayout({ children, frontMatter }) {
  const showToc = !frontMatter.hide_toc && frontMatter.tocRaw.length > 0
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const [locale, setLocale] = useState('en')
  const { title, part, description, tags, updated, tocRaw } = frontMatter

  useEffect(() => {
    const browserLocales =
      navigator.languages === undefined
        ? [navigator.language]
        : navigator.languages
    if (browserLocales[0] !== undefined) {
      setLocale(browserLocales[0])
    }
  }, [])

  return (
    <DocumentLayout title={title} part={part} description={description}>
      <div className='content-container flex'>
        <div
          className='content lg:pt-4 px-4 md:px-8 w-screen max-w-screen-sm 
                    md:max-w-screen-md xl:max-w-screen-md 2xl:max-w-screen-lg'
        >
          {title && <h1 className='text-4xl font-bold my-5'>{title}</h1>}
          {description && <p className='my-1'>{description}</p>}
          {tags && (
            <div className='my-2 text-sm 2xl:text-base'>
              <span>
                <Text tid='Tags' />:
              </span>
              {tags.map((tag) => (
                <span className='border rounded m-1 p-1 text-xs' key={tag}>
                  {`#${tag}`}
                </span>
              ))}
            </div>
          )}

          <div className='md-content'>{children}</div>
          <hr className='my-3 mx-10 print:hidden dark:border-gray-600' />
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
          <div className='toc-container flex-none w-56 hidden lg:block'>
            <div className='toc sticky top-20'>
              <InPageToc tocRaw={tocRaw} />
            </div>
          </div>
        )}
      </div>
    </DocumentLayout>
  )
}
