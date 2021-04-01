'use strict'

const config = require('./config/config.json')

const { projectURL } = config

module.exports = {
  siteUrl: projectURL,
  generateRobotsTxt: true
}
