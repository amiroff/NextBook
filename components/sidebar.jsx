import SideBarSection from './sidebar-section'
import config from 'config/config.json'

function SideBar() {
  const { toc } = config

  return (
    <div>
      <div className='mt-6 pl-4 leading-loose tracking-wide'>
        {toc.map((toc, id) => (
          <SideBarSection toc={toc} key={id} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
