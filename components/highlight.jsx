import { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import django from 'react-syntax-highlighter/dist/cjs/languages/prism/django'
import git from 'react-syntax-highlighter/dist/cjs/languages/prism/git'
import ini from 'react-syntax-highlighter/dist/cjs/languages/prism/ini'
import javascript from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json'
import jsx from 'react-syntax-highlighter/dist/cjs/languages/prism/jsx'
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown'
import html from 'react-syntax-highlighter/dist/cjs/languages/prism/markup'
import powershell from 'react-syntax-highlighter/dist/cjs/languages/prism/powershell'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'
import shellSession from 'react-syntax-highlighter/dist/cjs/languages/prism/shell-session'
import sql from 'react-syntax-highlighter/dist/cjs/languages/prism/sql'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript'
import yaml from 'react-syntax-highlighter/dist/cjs/languages/prism/yaml'
import { materialDark, materialLight } from './prism'
import Text, { _ } from './text'
import { ThemeContext } from './context'
import { Copied, Copy } from './svgicons'

SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('html', html)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('powershell', powershell)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('ini', ini)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('shellSession', shellSession)
SyntaxHighlighter.registerLanguage('git', git)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('django', django)
SyntaxHighlighter.registerLanguage('javascript', javascript)

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
  const theme = useContext(ThemeContext)
  const [copied, setCopied] = useState(false)
  const markedArray = marked.split(',').map(function (n) {
    return Number(n)
  })

  const customPreStyles = dark ? 'code dark' : 'code'
  const customPre = (props) => <pre className={customPreStyles}>{props.children}</pre>
  let colorMode = dark ? materialDark : theme === 'dark' ? materialDark : materialLight

  let wrapper = (lineNumber) => {
    const style = { borderLeft: '3px solid transparent', display: 'block', paddingLeft: '20px' }
    if (lineNumber && markedArray.includes(lineNumber)) {
      style.backgroundColor = '#9e9e9e20'

      style.borderLeft = '3px solid #9e9e9e'
    }
    return {
      style,
      onClick() {},
    }
  }

  return (
    <>
      {(clipboard || title) && (
        <div className='code-header'>
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
                title={_('Copy to clipboard')}
              >
                {copied ? <Copied /> : <Copy />}
                {copied ? <Text tid='Copied!' /> : <Text tid='Copy' />}
              </button>
            </CopyToClipboard>
          )}
        </div>
      )}
      <div className={markedArray.length > 1 && !numbered ? 'clean code-body' : 'code-body'}>
        <SyntaxHighlighter
          language={lang}
          showLineNumbers={markedArray.length > 1 && !numbered ? true : numbered}
          startingLineNumber={parseInt(startline)}
          style={colorMode}
          wrapLines
          lineProps={wrapper}
          PreTag={customPre}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

export default Highlight
