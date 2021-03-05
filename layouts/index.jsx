// This is the layout file used by .mdx files.

import InPageToc from 'components/inpagetoc'
import PrevNextNav from 'components/prevnextnav'
import Text from 'components/text'
import Layout from 'layouts/layout'

export default function DocsLayout({ children, frontMatter }) {
  return (
    <Layout
      title={frontMatter.part ? `${frontMatter.part} - ${frontMatter.title}` : frontMatter.title}
      description={frontMatter.description}
      part={frontMatter.part}
    >
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-9 px-20'>
            <div className='my-20'>
              {frontMatter.title && <h1>{frontMatter.title}</h1>}
              {frontMatter.description && <p>{frontMatter.description}</p>}
              {frontMatter.tags && (
                <div className='mb-5'>
                  <span>
                    <Text tid='Keywords' />: {''}
                  </span>
                  {frontMatter.tags.map((tag) => (
                    <span className='badge p-5 ml-3 mr-5' key={tag}>
                      {`#${tag}`}
                    </span>
                  ))}
                </div>
              )}
              {frontMatter.updated && (
                <div className='mt-5'>
                  <Text tid='Last Update' />: {frontMatter.updated}
                </div>
              )}
              <hr className='mt-20' />
            </div>

            <div className='md-content'>{children}</div>
            <hr className='mt-20' />
            <div>
              <PrevNextNav />
            </div>
          </div>
          <div className='col-lg-3 d-none d-lg-block'>
            <InPageToc tocRaw={frontMatter.tocRaw} />
          </div>
        </div>
      </div>
    </Layout>
  )
}
