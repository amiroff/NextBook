export default function Index() {
  return (
    <div>
      <div className='bg-gray-400 fixed top-0 w-full h-11 shadow'>header</div>
      <div className='content-wrapper mt-11 flex lg:container lg:mx-auto'>
        <div className='sidebar flex-none w-72 bg-gray-600 p-2 h-screen overflow-scroll fixed top-11 hidden md:block'>
          sidebar
        </div>
        <div className='content-wrapper md:ml-72 flex'>
          <div className='content'>content</div>
          <div className='toc-container flex-none w-56 bg-gray-600 p-2 hidden xl:block'>
            <div className='toc sticky top-20'>toc</div>
          </div>
        </div>
      </div>
    </div>
  )
}
