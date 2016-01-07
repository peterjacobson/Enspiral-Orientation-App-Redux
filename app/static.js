import http from 'http'

export default function createStatic (config) {
  const ecstatic = config.livereload ?
    require('ecstatic-lr') : require('ecstatic')

  return http.createServer(
    ecstatic(config.static)
  )
}
