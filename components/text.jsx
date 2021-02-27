import config from '../config.json'

export function _(tid) {
  return config.text[tid] || tid
}

function Text({ tid }) {
  return _(tid)
}

export default Text
