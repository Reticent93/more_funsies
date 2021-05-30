import {knex} from 'knex';
import knexfile from '../knexfile'


// const knex = require('knex')
// const knexfile = require('knexfile')

export default knex(knexfile)