'use strict'

const config = require('./config.json')

const { projectURL } = config

module.exports = {
  siteUrl: projectURL,
  generateRobotsTxt: true,
}
