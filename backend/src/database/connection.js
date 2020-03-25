const knex = require('knex');
const configuration = require('../../knexfile');

const con = knex(configuration.development);

module.exports = con;