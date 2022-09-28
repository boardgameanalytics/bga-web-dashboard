const knex = require('knex');
const configs = require('./knexfile.js');
const environment = process.env.NODE_ENV || 'staging';

module.exports = knex(configs[environment]);