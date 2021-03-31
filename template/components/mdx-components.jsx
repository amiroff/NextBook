import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Highlight from './highlight'
import Text, { _ } from './text'

export const Table = (props) => (
  <table className='table custom-table' {...props} />
)

export const Blockquote = (props) => (
  <blockquote className='blockquote' {...props} />
)

export const Pre = ({ children }) => <>{children}</>

export const Details = (props) => (
  <details className='collapse-panel mw-full my-10' {...props} />
)

export const Summary = (props) => (
  <summary className='collapse-header text-muted' {...props} />
)

export const CustomLink = (props) => (
  <Link {...props}>
    <a {...props} />
  </Link>
)

export const CustomImage = (props) => {
  if (props.alt?.includes('raw')) {
    return <img {...props} alt={props.alt.replace('raw', '').trim()} />
  }

  const exClass = props.alt?.includes('|ex') ? 'excalidraw' : 'image'
  return (
    <>
      <img className={`m-5 img-fluid d-block rounded ${exClass}`} {...props} />
      {props.alt && (
        <span className='text-left ml-10 d-block'>
          <Text tid='Figure' className='font-weight-bold' />:{' '}
          {props.alt.replace('|ex', '').trim()}
        </span>
      )}
    </>
  )
}

export const Code = (props) => {
  const language = props.className?.replace(/language-/, '') || 'text'
  return (
    <Highlight lang={language} {...props}>
      {props.children.replace(/\n+$/, '')}
    </Highlight>
  )
}

export const Tab = ({ children }) => (
  <div className='tab-content'>{children}</div>
)

export const Tabs = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  let tabs = props.children.map((child, index) => {
    let style =
      activeIndex === index
        ? 'btn btn-rounded active border-top-0 border-bottom'
        : 'btn btn-rounded alt-dm tab-label border-top-0 border-bottom'

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
    <div className='tabbed-content rounded-bottom p-0 m-0'>
      <div className='btn-group w-full' role='group'>
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
  })

  return (
    <div className='linked-heading'>
      <Tag id={props.id} className='d-inline-block'>
        {props.children}
      </Tag>
      <CopyToClipboard text={location} onCopy={() => setCopied(true)}>
        <span
          className={
            copied
              ? 'd-inline-block m-5 font-size-20 text-success'
              : 'd-inline-block m-5 font-size-20'
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
    <Heading level='1' id={id}>
      {children}
    </Heading>
  )
}

export const H2 = ({ children, id }) => {
  return (
    <Heading level='2' id={id}>
      {children}
    </Heading>
  )
}

export const H3 = ({ children, id }) => {
  return (
    <Heading level='3' id={id}>
      {children}
    </Heading>
  )
}

export const H4 = ({ children, id }) => {
  return (
    <Heading level='4' id={id}>
      {children}
    </Heading>
  )
}

export const H5 = ({ children, id }) => {
  return (
    <Heading level='5' id={id}>
      {children}
    </Heading>
  )
}

export const H6 = ({ children, id }) => {
  return (
    <Heading level='6' id={id}>
      {children}
    </Heading>
  )
}

export const Badge = (props) => (
  <span className={`badge ${props.className}`}>{props.children}</span>
)

export const Card = (props) => (
  <div className={props.className}>
    <div className='card m-5'>{props.children}</div>
  </div>
)
