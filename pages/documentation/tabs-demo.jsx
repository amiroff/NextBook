// <Tabs>
//   <Tab label='Tab 1'>Tab content 1</Tab>
//   <Tab label='Tab 2'>Tab content 2</Tab>
// </Tabs>

const Tab = (props) => {
  return (
    <>
      <ul className='tabs'>
        <li className='tab'>
          <label htmlFor='tab1'>Gangsta lipsum</label>
        </li>
        <li className='tab'>
          <label htmlFor='tab2'>Zombie lipsum</label>
        </li>
        <li className='tab'>
          <label htmlFor='tab3'>New age bullshit</label>
        </li>
      </ul>

      <div className='tab-content'>
        <p>
          Da bomb ipsizzle dolizzle sit amizzle, consectetuer adipiscing fo shizzle. Nullam yo
          velizzle, aliquet volutpizzle, fo shizzle yippiyo, for sure vizzle, arcu. Black eget fo
          shizzle. Sizzle erizzle. Rizzle at dolizzle dapibizzle turpis tempizzle izzle. Maurizzle
          crackalackin nibh et check out this. Cool check it out tortizzle. Break it down bling
          bling rhoncizzle my shizz. Fo hizzle rizzle platea boom shackalack. Gangsta dapibus. Owned
          tellus urna, pretizzle black, mattizzle ac, eleifend for sure, nunc. Owned suscipizzle.
          Integizzle sempizzle shiz sed purizzle.
        </p>
      </div>
    </>
  )
}
const Tabs = (props) => {
  return (
    <div className='tabbed'>
      {props.children.map((child, index) => {
        return (
          <input
            type='radio'
            id={`tab${index + 1}`}
            name='css-tabs'
            key={index}
            defaultChecked={index === 0 ? 'defaultChecked' : ''}
          />
        )
      })}
      {props.children}
    </div>
  )
}

function tabsdemo() {
  return (
    <>
      <Tabs>
        <Tab label='Tab 1'>Tab content 1</Tab>
        <Tab label='Tab 2'>Tab content 2</Tab>
      </Tabs>
      {/* <div className='tabbed'>
        <input type='radio' id='tab1' name='css-tabs' defaultChecked />
        <input type='radio' id='tab2' name='css-tabs' />
        <input type='radio' id='tab3' name='css-tabs' />

        <ul className='tabs'>
          <li className='tab'>
            <label htmlFor='tab1'>Gangsta lipsum</label>
          </li>
          <li className='tab'>
            <label htmlFor='tab2'>Zombie lipsum</label>
          </li>
          <li className='tab'>
            <label htmlFor='tab3'>New age bullshit</label>
          </li>
        </ul>

        <div className='tab-content'>
          <p>
            Da bomb ipsizzle dolizzle sit amizzle, consectetuer adipiscing fo shizzle. Nullam yo
            velizzle, aliquet volutpizzle, fo shizzle yippiyo, for sure vizzle, arcu. Black eget fo
            shizzle. Sizzle erizzle. Rizzle at dolizzle dapibizzle turpis tempizzle izzle. Maurizzle
            crackalackin nibh et check out this. Cool check it out tortizzle. Break it down bling
            bling rhoncizzle my shizz. Fo hizzle rizzle platea boom shackalack. Gangsta dapibus.
            Owned tellus urna, pretizzle black, mattizzle ac, eleifend for sure, nunc. Owned
            suscipizzle. Integizzle sempizzle shiz sed purizzle.
          </p>
        </div>

        <div className='tab-content'>
          <p>
            Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes
            malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis.
            Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins
            apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris.{' '}
          </p>
        </div>

        <div className='tab-content'>
          <p>
            Our conversations with other pilgrims have led to an awakening of pseudo-astral
            consciousness. Who are we? Where on the great myth will we be re-energized? We are at a
            crossroads of complexity and stagnation.
          </p>
          <p>
            Eons from now, we dreamers will exist like never before as we are aligned by the cosmos.
            We are being called to explore the stratosphere itself as an interface between nature
            and complexity. We must learn how to lead infinite lives in the face of bondage.
          </p>
        </div>
      </div> */}
    </>
  )
}

export default tabsdemo
