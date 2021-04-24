// This is the default layout file used by content (stuff in pages folder).

import InPageToc from 'components/in-page-toc'
import PageNav from 'components/page-nav'
import Text from 'components/text'
import DefaultLayout from 'layouts/default'
import { useEffect, useState } from 'react'

export default function DocsLayout({ children, frontMatter }) {
  const showToc = !frontMatter.hide_toc && frontMatter.tocRaw.length > 0
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  const [locale, setLocale] = useState('en')

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
    <DefaultLayout
      title={frontMatter.title}
      htmlTitle={
        frontMatter.part
          ? `${frontMatter.title} - ${frontMatter.part}`
          : frontMatter.title
      }
      description={frontMatter.description}
      part={frontMatter.part}
    >
      <div className='lg:pt-4 px-2 xl:px-10 w-screen max-w-screen-sm md:max-w-screen-md xl:max-w-screen-lg'>
        <div className='mx-1 md:mx-4'>
          {frontMatter.title && (
            <h1 className='text-4xl font-bold my-5'>{frontMatter.title}</h1>
          )}
          {frontMatter.description && (
            <p className='my-1'>{frontMatter.description}</p>
          )}
          {frontMatter.tags && (
            <div className='my-2 text-sm 2xl:text-base'>
              <span>
                <Text tid='Tags' />:
              </span>
              {frontMatter.tags.map((tag) => (
                <span className='border rounded m-1 p-1 text-xs' key={tag}>
                  {`#${tag}`}
                </span>
              ))}
            </div>
          )}

          <div className='md-content'>{children}</div>
          <hr className='my-3 mx-10 print:hidden dark:border-gray-600' />
          {frontMatter.updated && (
            <div className='text-center text-xs'>
              <Text tid='Last Update' />:{' '}
              {new Date(frontMatter.updated).toLocaleDateString(
                locale || 'en',
                dateOptions
              )}
            </div>
          )}
          <PageNav />
        </div>
      </div>
      {showToc && (
        <div className='toc-container flex-none w-52 hidden lg:block'>
          <div className='toc sticky top-20'>
            <InPageToc tocRaw={frontMatter.tocRaw} />
          </div>
        </div>
      )}
    </DefaultLayout>
  )
}
