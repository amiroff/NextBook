import { useRef } from 'react'
import { useShortcuts } from 'react-shortcuts-hook'
import Text from './text'

function Search() {
  const searchInput = useRef(null)
  const focus = () => {
    searchInput.current.focus()
  }

  useShortcuts(['control', 'shift', 'F'], () => focus())

  return (
    <div className='sidebar-content'>
      <input
        className='form-control search'
        type='text'
        placeholder={<Text tid='Search content' />}
        ref={searchInput}
      />
      <div className='mt-10 font-size-12 hidden-sm-and-down text-muted'>
        <kbd className='text-muted'>ctrl</kbd> + <kbd className='text-muted'>shift</kbd> +{' '}
        <kbd className='text-muted'>F</kbd>
      </div>
    </div>
  )
}

export default Search
