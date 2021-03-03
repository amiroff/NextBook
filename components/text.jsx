import config from '../config.json'

export function _(tid) {
  return config.text[tid] || tid
}

function Text(props) {
  return <span {...props}>{_(props.tid)}</span>
}

export default Text
