export default class Config {
  constructor() {
    let config = {
      'localhost': {
        baseUrl: '//localhost:9000',
        shortBaseUrl: 'https://goo.gl/'
      },

      'damp-coast-12217.herokuapp.com': {
        baseUrl: '//damp-coast-12217.herokuapp.com',
        shortBaseUrl: 'https://goo.gl/'
      }
    }

    let host = location.hostname
    if (!host in config) {
      console.log(`ERROR: create a config for host "${host}"`)
      return
    }

    this.config = config[host]

    // add protocol
    this.config.baseUrl = location.protocol + this.config.baseUrl
  }

  get(key) {
    if (key in this.config) return this.config[key]
    return null
  }
}
