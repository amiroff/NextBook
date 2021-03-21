// This is the default layout file used by content (stuff in pages folder).

import InPageToc from 'components/inpagetoc'
import PrevNextNav from 'components/prevnextnav'
import Text from 'components/text'
import Layout from 'layouts/global'
import config from '../config.json'

export default function DocsLayout({ children, frontMatter }) {
  const showToc = !frontMatter.hide_toc && frontMatter.tocRaw.length > 0
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  return (
    <Layout
      title={frontMatter.title}
      htmlTitle={
        frontMatter.part ? `${frontMatter.part} - ${frontMatter.title}` : frontMatter.title
      }
      description={frontMatter.description}
      part={frontMatter.part}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className={showToc ? 'col-lg-9 main-content' : 'col-lg-12 main-content'}>
            <div className='my-20'>
              {frontMatter.title && <h1>{frontMatter.title}</h1>}
              {frontMatter.description && <p>{frontMatter.description}</p>}
              {frontMatter.tags && (
                <div className='mb-5'>
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
              <hr className='mt-20' />
            </div>

            <div className='md-content'>{children}</div>
            <hr className='my-20 mx-10' />
            {frontMatter.updated && (
              <>
                <div className='mb-20 text-muted text-center font-size-12'>
                  <Text tid='Last Update' />:{' '}
                  {new Date(frontMatter.updated).toLocaleDateString(
                    config.locale || 'en',
                    dateOptions
                  )}
                </div>
              </>
            )}
            <PrevNextNav />
          </div>
          {showToc && (
            <div className='col-lg-3 d-none d-lg-block'>
              <InPageToc tocRaw={frontMatter.tocRaw} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
