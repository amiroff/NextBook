import { useEffect, useState } from 'react';
import router from 'next/router';
import Scrollspy from 'components/scrollspy'
import Text from './text'
import { Link } from './svg-icons';

function InPageTocElement(props) {
  // Indent headings based on their level
  const level = props.levels[props.children] >= 1 ? props.levels[props.children] : 1
  const style = { paddingLeft: `${level}em` }
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

  // Update current "copy link" button when the user scrolls
  const [url, setUrl] = useState('/')

  useEffect(()=>{
    const onHashChangeStart = (url) => {
        setUrl(url)
    };

    router.events.on("hashChangeStart", onHashChangeStart);

    return () => {
        router.events.off("hashChangeStart", onHashChangeStart);
    };
  }, []);


  if (tocIds.length) {
    return (
      <div className='px-4'>
        <a
          className='m-4 text-sm text-gray-600 hover:text-gray-500 dark:text-gray-400  dark:hover:text-gray-300 text-center block'
          href={url}
        >
          <Link />
          <Text tid='Permalink' className="px-4" />
        </a>

        <div className='font-medium rounded py-2 text-center text-gray-700 dark:text-gray-100 bg-gray-300 dark:bg-gray-700'>
          <Text tid='Page Contents' />
        </div>
        <Scrollspy
          ids={tocIds}
          itemElement={<InPageTocElement levels={levels} />}
          itemContainerClassName='tracking-wide mt-4 text-gray-600 dark:text-gray-400 text-sm 2xl:text-base border-0 border-l border-gray-300 dark:border-gray-600 leading-6 cursor-pointer'
          activeItemClassName='active text-gray-900 dark:text-gray-200 border-l border-gray-900 dark:border-gray-200'
          includeParentClasses={false}
        />
        
      </div>
    )
  } else {
    return null
  }
}

export default InPageToc
