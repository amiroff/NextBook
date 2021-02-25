import Scrollspy from 'react-scrollspy-ez'

function InPageToc({ tocRaw }) {
  let tocIds = []
  tocRaw.forEach((row) => {
    tocIds.push(row.slug)
  })

  if (tocIds.length) {
    return (
      <div className='content position-fixed page-toc top-10'>
        <h2 className='content-title'>Page Contents</h2>
        <Scrollspy
          ids={tocIds}
          itemContainerClassName='page-toc-container'
          activeItemClassName='page-toc-active'
          includeParentClasses={true}
        />
      </div>
    )
  } else {
    console.info('Tip: add titles (hX) to your document to leverage In-Page Table Of Contents')
    return null
  }
}

export default InPageToc
