import Scrollspy from 'components/scrollspy'
import Text from './text'

function InPageTocElement(props) {
  // remove 1 from first heading to prevent exe left padding and add standard left padding
  const style = { paddingLeft: `${props.levels[props.children] - 1 + 0.2}em` }
  return (
    <li style={style} className={props.className} onClick={props.onClick}>
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
      <div className='content position-fixed page-toc top-10 m-0 mt-20 mr-10'>
        <span className='content-title'>
          <Text tid='Page Contents' />
        </span>
        <Scrollspy
          ids={tocIds}
          itemElement={<InPageTocElement levels={levels} />}
          itemContainerClassName='page-toc-container'
          activeItemClassName='page-toc-active'
          includeParentClasses={false}
        />
      </div>
    )
  } else {
    return null
  }
}

export default InPageToc
