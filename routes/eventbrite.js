require('dotenv').config()
import express from 'express'
const router = express.Router()
const Eventbrite = require('eventbrite')
const rp = require('request-promise')

const eb_client = Eventbrite({appKey: process.env.EB_APP_KEY, auth: process.env.EB_USER_KEY})

router.get('/users', (request, response) => {
  rp(eb_client)
  .then(results => {response.json(results)})
})

export default router
