import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Highlight from './highlight'
import Text, { _ } from './text'

export const P = (props) => <p {...props} />
export const Hr = (props) => (
  <hr className='my-3 mx-1 border-gray-300 dark:border-gray-600' {...props} />
)

export const Ol = (props) => (
  <ol className='ml-6 list-outside list-decimal leading-7' {...props} />
)

export const Ul = (props) => (
  <ul className='ml-6 list-outside list-disc leading-7' {...props} />
)

export const Thead = (props) => (
  <thead
    className='tracking-wider text-sm 2xl:text-base font-medium uppercase'
    {...props}
  />
)
export const Tbody = (props) => (
  <tbody className='text-sm 2xl:text-base' {...props} />
)
export const Tr = (props) => (
  <tr className='border border-gray-400 dark:border-gray-600 p-2' {...props} />
)
export const Td = (props) => (
  <td className='border border-gray-400 dark:border-gray-600 p-2' {...props} />
)
export const Th = (props) => (
  <th
    className='border border-gray-400 p-2 font-semibold bg-gray-300 dark:bg-gray-600 dark:border-gray-500'
    {...props}
  />
)
export const Table = (props) => <table className='table-auto my-4' {...props} />

export const Blockquote = (props) => (
  <blockquote
    className='m-2 ml-3 pl-2 border-l-4 dark:border-gray-600 border-gray-300 text-gray-500 dark:text-gray-400'
    {...props}
  />
)

export const Details = (props) => (
  <details className='p-2 pl-0 font-normal' {...props} />
)

export const Summary = (props) => (
  <summary
    className='summary cursor-pointer p-1 font-semibold pl-0 select-none'
    {...props}
  />
)

export const CustomLink = (props) => {
  if (props.href.startsWith('#')) {
    return <a {...props} className='underline' />
  }

  return (
    <Link {...props}>
      <a {...props} className='underline' />
    </Link>
  )
}

export const CustomImage = (props) => {
  if (props.alt?.includes('raw')) {
    return <img {...props} alt={props.alt.replace('raw', '').trim()} />
  }

  const exClass = props.alt?.includes('|ex') ? 'excalidraw' : ''
  return (
    <>
      <img
        className={`object-scale-down block rounded ${exClass}`}
        {...props}
      />
      {props.alt && (
        <span className='block m-1 md:m-2'>
          <Text tid='Figure' className='font-semibold' />:{' '}
          {props.alt.replace('|ex', '').trim()}
        </span>
      )}
    </>
  )
}

export const Pre = (props) => {
  const language = props.className?.replace(/language-/, '') || 'text'
  return (
    <Highlight lang={language} {...props}>
      {props.children.replace(/\n+$/, '')}
    </Highlight>
  )
}

export const InlineCode = (props) => {
  return (
    <code className='rounded p-1 bg-gray-300 dark:bg-gray-700 text-sm'>
      {props.children}
    </code>
  )
}

export const Tab = ({ children }) => <div>{children}</div>

export const Tabs = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  let tabs = props.children.map((child, index) => {
    let style =
      activeIndex === index
        ? 'py-3 px-6 block hover:text-gray-800 focus:outline-none font-medium text-gray-800 dark:text-gray-100 dark:hover:text-gray-100 border-b border-gray-600 dark:border-gray-400'
        : 'py-3 px-6 block text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 focus:outline-none font-medium border-b border-transparent'

    return (
      <button
        className={style}
        onClick={() => setActiveIndex(index)}
        key={index}
      >
        {child.props.className}
      </button>
    )
  })

  return (
    <div className='dark:bg-gray-600 bg-gray-50 rounded my-4 shadow'>
      <div className='flex flex-col sm:flex-row' role='group'>
        {tabs}
      </div>
      <div className='card bg-transparent m-0 border-0 p-5'>
        {props.children[activeIndex]}
      </div>
    </div>
  )
}

const Heading = (props) => {
  const [copied, setCopied] = useState(false)
  const [location, setlocation] = useState(false)
  const Tag = 'h' + props.level

  useEffect(() => {
    setlocation(`${window.location.href}#${props.id}`)
  }, [props.id])

  return (
    <div className={`font-semibold my-5 text-${props.size}`}>
      <Tag id={props.id} className='inline-block'>
        {props.children}
      </Tag>
      <CopyToClipboard
        aria-hidden='true'
        text={location}
        onCopy={() => setCopied(true)}
      >
        <span
          className={
            copied
              ? 'hidden md:inline-block m-1 text-sm 2xl:text-base cursor-pointer'
              : 'hidden md:inline-block m-1 text-sm 2xl:text-base cursor-pointer text-transparent hover:text-gray-400'
          }
          title={_('Copy link')}
        >
          ¶
        </span>
      </CopyToClipboard>
    </div>
  )
}

export const H1 = ({ children, id }) => {
  return (
    <Heading level='1' id={id} size='5xl'>
      {children}
    </Heading>
  )
}

export const H2 = ({ children, id }) => {
  return (
    <Heading level='2' id={id} size='4xl'>
      {children}
    </Heading>
  )
}

export const H3 = ({ children, id }) => {
  return (
    <Heading level='3' id={id} size='3xl'>
      {children}
    </Heading>
  )
}

export const H4 = ({ children, id }) => {
  return (
    <Heading level='4' id={id} size='2xl'>
      {children}
    </Heading>
  )
}

export const H5 = ({ children, id }) => {
  return (
    <Heading level='5' id={id} size='xl'>
      {children}
    </Heading>
  )
}

export const H6 = ({ children, id }) => {
  return (
    <Heading level='6' id={id} size='lg'>
      {children}
    </Heading>
  )
}
