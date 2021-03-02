import Link from 'next/link'
import Highlight from './highlight'
import Text, { _ } from './text'

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
    <span>
      <img className='img-fluid m-5 d-block' {...props} />
      {props.alt && (
        <span className='text-left font-italic ml-10'>
          <span className='font-weight-bold'>
            <Text tid='Figure' />
          </span>
          : {props.alt}
        </span>
      )}
    </span>
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
