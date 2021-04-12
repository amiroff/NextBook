// This is the default layout file used by content (stuff in pages folder).

import InPageToc from 'components/in-page-toc'
import PageNav from 'components/page-nav'
import Text from 'components/text'
import Layout from 'layouts/global'
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
    <Layout
      title={frontMatter.title}
      htmlTitle={
        frontMatter.part
          ? `${frontMatter.part} - ${frontMatter.title}`
          : frontMatter.title
      }
      description={frontMatter.description}
      part={frontMatter.part}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div
            className={
              showToc ? 'col-lg-9 col-xxl-10 main-content' : 'col main-content'
            }
          >
            <div className='my-20'>
              {frontMatter.title && <h1>{frontMatter.title}</h1>}
              {frontMatter.description && <p>{frontMatter.description}</p>}
              {frontMatter.tags && (
                <div className='mb-5 tags'>
                  <span>
                    <Text tid='Tags' />:
                  </span>
                  {frontMatter.tags.map((tag) => (
                    <span className='badge p-5 ml-3 mx-5' key={tag}>
                      {`#${tag}`}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className='md-content'>{children}</div>
            <hr className='my-20 mx-10 no-print' />
            {frontMatter.updated && (
              <>
                <div className='mb-20 text-muted text-center font-size-12'>
                  <Text tid='Last Update' />:{' '}
                  {new Date(frontMatter.updated).toLocaleDateString(
                    locale || 'en',
                    dateOptions
                  )}
                </div>
              </>
            )}
            <PageNav />
          </div>
          {showToc && (
            <div className='col-lg-3 col-xxl-2 d-none d-lg-block'>
              <InPageToc tocRaw={frontMatter.tocRaw} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
