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
import ThemeContext from './store/theme-context'
import { Copied, Copy } from './svg-icons'
import { _ } from './text'

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

const yamlToArray = (yamlString) =>
  yamlString.split(',').map(function (n) {
    return Number(n)
  })

const Highlight = ({
  lang,
  title,
  link,
  numbered,
  startline = 1,
  marked = '',
  added = '',
  removed = '',
  dark,
  children
}) => {
  const themeCtx = useContext(ThemeContext)
  const [copied, setCopied] = useState(false)
  const markedArray = marked.split(',').map(function (n) {
    return Number(n)
  })
  const addedArray = yamlToArray(added)
  const removedArray = yamlToArray(removed)
  const pseudoNumbered =
    markedArray.concat(removedArray).concat(addedArray).length > 1 && !numbered

  const customPreStyles = dark ? 'code dark' : 'code'
  const customPre = (props) => (
    <pre className={customPreStyles}>{props.children}</pre>
  )
  let colorMode = dark
    ? materialDark
    : themeCtx.darkModeActive
    ? materialDark
    : materialLight

  let wrapper = (lineNumber) => {
    const style = {
      borderLeft: '3px solid transparent',
      display: 'block',
      paddingLeft: '16px'
    }
    if (markedArray.includes(lineNumber)) {
      style.backgroundColor = '#9e9e9e20'
      style.borderLeft = '1px solid #9e9e9e60'
    }
    if (addedArray.includes(lineNumber)) {
      style.backgroundColor = '#6ace5030'
      style.borderLeft = '1px solid #6ace5060'
    }
    if (removedArray.includes(lineNumber)) {
      style.backgroundColor = '#ff909030'
      style.borderLeft = '1px solid #ff909060'
    }
    return {
      style,
      onClick() {}
    }
  }

  return (
    <>
      {title && (
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
        </div>
      )}
      <div className={pseudoNumbered ? 'clean code-body' : 'code-body'}>
        <div className='copy-container'>
          <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
            <button
              className='copy-to-clipboard btn btn-sm btn-transparent'
              title={_('Copy to clipboard')}
            >
              {copied ? <Copied /> : <Copy />}
            </button>
          </CopyToClipboard>
        </div>
        <SyntaxHighlighter
          language={lang}
          showLineNumbers={pseudoNumbered ? true : numbered}
          startingLineNumber={parseInt(startline)}
          style={colorMode}
          wrapLines
          lineProps={wrapper}
          PreTag={customPre}
          codeTagProps={{}}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  )
}

export default Highlight
