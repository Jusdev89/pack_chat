import config from '../knexfile.js'
import Knex from 'knex'

const env = process.env.DATABASE_ENV
  ? process.env.DATABASE_ENV
  : 'development'

const knex = Knex(config[env])
knex.migrate.latest([config])

export default knex
