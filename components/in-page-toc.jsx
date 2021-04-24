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
      <div className='pr-2'>
        <span className='font-medium uppercase'>
          <Text tid='Page Contents' />
        </span>
        <Scrollspy
          ids={tocIds}
          itemElement={<InPageTocElement levels={levels} />}
          itemContainerClassName='tracking-wide mt-4 text-gray-600 dark:text-gray-400 text-sm border-0 border-l dark:border-gray-600 leading-6 cursor-pointer'
          activeItemClassName='text-gray-900 dark:text-gray-200 border-l border-gray-900 dark:border-gray-200'
          includeParentClasses={false}
        />
      </div>
    )
  } else {
    return null
  }
}

export default InPageToc
