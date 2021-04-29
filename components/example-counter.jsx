import React, { useState } from 'react'
export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='border border-gray-500 p-2 m-10 rounded-md bg-gray-700 text-gray-100'>
      <p>You clicked {count} times!</p>
      <button
        onClick={() => setCount(count + 1)}
        className='rounded border border-gray-500 bg-gray-900 p-1 mt-2'
      >
        Click me
      </button>
    </div>
  )
}
