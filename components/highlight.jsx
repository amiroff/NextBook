import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { useLocalStorage } from 'react-use'

const Highlight = ({
  lang,
  title,
  link,
  numbered,
  startline = 1,
  clipboard,
  marked = '',
  dark,
  children,
}) => {
  const [copied, setCopied] = useState(false)
  const [darkMode] = useLocalStorage('darkMode', true)
  const markedArray = marked.split(',').map(function (n) {
    return Number(n)
  })

  const customPreStyles = dark ? 'code dark' : 'code'
  const customPre = (props) => <pre className={customPreStyles}>{props.children}</pre>

  let wrapper = (lineNumber) => {
    const style = {}
    if (lineNumber && markedArray.includes(lineNumber)) {
      style.backgroundColor = '#cccccc30'
      style.display = 'block'
    }
    return {
      style,
      onClick() {},
    }
  }

  return (
    <>
      {(clipboard || title) && (
        <div className='code-header border-bottom-0 code'>
          <div className='code-filename'>
            {link ? (
              <a href={link} target='_blank' rel='noreferrer'>
                {title}
              </a>
            ) : (
              <span>{title}</span>
            )}
          </div>
          {clipboard && (
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
              <button
                className='copy-to-clipboard btn btn-sm btn-primary '
                type='button'
                title='Copy to clipboard'
              >
                {copied ? (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4'
                    />
                  </svg>
                ) : (
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                    />
                  </svg>
                )}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </CopyToClipboard>
          )}
        </div>
      )}
      <SyntaxHighlighter
        language={lang}
        showLineNumbers={numbered}
        startingLineNumber={parseInt(startline)}
        style={dark === true ? atomOneDark : darkMode === true ? atomOneDark : atomOneLight}
        wrapLines
        lineProps={wrapper}
        PreTag={customPre}
      >
        {children}
      </SyntaxHighlighter>
    </>
  )
}

export default Highlight
