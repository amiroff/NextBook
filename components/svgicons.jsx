export const ArrowRight = () => (
  <svg
    preserveAspectRatio='xMidYMid meet'
    height='1.6em'
    width='1.6em'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    stroke='currentColor'
  >
    <g>
      <line x1='5' y1='12' x2='19' y2='12'></line>
      <polyline points='12 5 19 12 12 19'></polyline>
    </g>
  </svg>
)

export const ArrowLeft = () => (
  <svg
    preserveAspectRatio='xMidYMid meet'
    height='1.6em'
    width='1.6em'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    stroke='currentColor'
  >
    <g>
      <line x1='19' y1='12' x2='5' y2='12'></line>
      <polyline points='12 19 5 12 12 5'></polyline>
    </g>
  </svg>
)

export const Moon = () => (
  <svg
    className='w-6 h-6 svg-button'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
    />
  </svg>
)

export const Sun = () => (
  <svg
    className='w-6 h-6 svg-button'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
)

export const Hamburger = () => (
  <svg
    className='w-6 h-6 svg-button'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M4 6h16M4 12h16M4 18h16'
    />
  </svg>
)

export const Copied = () => (
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
)

export const Copy = () => (
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
)

export const AngleRight = () => (
  <svg
    height='20px'
    className='sidebar-title-icon'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
  </svg>
)

export const AngleDown = () => (
  <svg
    height='20px'
    className='sidebar-title-icon'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
  </svg>
)

export const Check = () => (
  <svg height='12px' fill='none' viewBox='0 0 20 20' stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
  </svg>
)

export const Dot = () => (
  <svg height='20px' fill='currentColor' viewBox='0 0 12 12'>
    <path d='M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z' />
  </svg>
)
