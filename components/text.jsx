import config from 'config/config.json'

export function _(tid) {
  return config.text[tid] || tid
}

function Text(props) {
  return <span className={props.className}>{_(props.tid)}</span>
}

export default Text
