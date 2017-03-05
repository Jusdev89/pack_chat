import express from 'express'
const router = express.Router()
const Eventbrite = require('eventbrite')
const rp = require('request-promise')



router.get('/users', (request, response) => {
  rp(eb_client)
  .then(results => {response.json(results)})
})

export default router
