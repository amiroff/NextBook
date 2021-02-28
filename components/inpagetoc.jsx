import Scrollspy from 'react-scrollspy-ez'
import Text from './text'

function InPageTocElement(props) {
  // remove 1 from first heading to prevent exe left padding and add standard left padding
  const style = { paddingLeft: `${props.levels[props.children] - 1 + 0.5}em` }
  return (
    <li style={style} className={props.className}>
      {props.children}
    </li>
  )
}

function InPageToc({ tocRaw }) {
  let tocIds = []
  let levels = {}
  tocRaw.forEach((row) => {
    // populate dictionary of heading slugs
    tocIds.push(row.slug)
    // populate dictionary of headings and their levels
    levels[row.content] = row.lvl
  })

  if (tocIds.length) {
    return (
      <div className='content position-fixed page-toc top-10 m-0 mt-20 mr-5'>
        <h2 className='content-title ml-10'>
          <Text tid='Page Contents' />
        </h2>
        <Scrollspy
          ids={tocIds}
          itemElement={<InPageTocElement levels={levels} />}
          itemContainerClassName='page-toc-container'
          activeItemClassName='page-toc-active'
          includeParentClasses={true}
        />
      </div>
    )
  } else {
    return null
  }
}

export default InPageToc
