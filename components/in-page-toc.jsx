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
        <div className='font-medium rounded py-2 text-center text-gray-700 dark:text-gray-100 bg-gray-300 dark:bg-gray-700'>
          <Text tid='Page Contents' />
        </div>
        <Scrollspy
          ids={tocIds}
          itemElement={<InPageTocElement levels={levels} />}
          itemContainerClassName='tracking-wide mt-4 text-gray-600 dark:text-gray-400 text-sm 2xl:text-base border-0 border-l border-gray-300 dark:border-gray-600 leading-6 cursor-pointer'
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
