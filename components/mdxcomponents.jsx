import Link from 'next/link'
import { useState } from 'react'
import Highlight from './highlight'
import Text from './text'

export const Table = (props) => <table className='table custom-table' {...props} />

export const Blockquote = (props) => <blockquote className='blockquote' {...props} />

export const Pre = ({ children }) => <>{children}</>

export const Details = (props) => <details className='collapse-panel mw-full my-10' {...props} />

export const Summary = (props) => <summary className='collapse-header text-muted' {...props} />

export const CustomLink = (props) => (
  <Link {...props}>
    <a {...props} />
  </Link>
)

export const Image = (props) => {
  return props.className === 'raw' ? (
    <img {...props} />
  ) : (
    <>
      <span className='d-block'>
        <img className='img-fluid m-5 d-block mx-auto' {...props} />
      </span>
      {props.alt && (
        <span className='text-left font-italic ml-10 text-center d-block'>
          <Text tid='Figure' className='font-weight-bold' />: {props.alt}
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

export const Tab = ({ children }) => <div className='tab-content'>{children}</div>

export const Tabs = (props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  let tabs = props.children.map((child, index) => {
    let style =
      activeIndex === index
        ? 'btn font-size-14 btn-rounded active border-top-0 border-bottom'
        : 'btn font-size-14 btn-rounded alt-dm tab-label border-top-0 border-bottom'

    return (
      <button className={style} onClick={() => setActiveIndex(index)} key={index}>
        {child.props.label}
      </button>
    )
  })

  return (
    <div className='tabbed-content rounded-bottom p-0 m-0'>
      <div className='btn-group w-full' role='group'>
        {tabs}
      </div>
      <div className='card bg-transparent m-0 border-0 p-5'>{props.children[activeIndex]}</div>
    </div>
  )
}
