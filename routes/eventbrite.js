import express from 'express'
const router = express.Router()
const Eventbrite = require('eventbrite')
const rp = require('request-promise')

const eb_client = Eventbrite({'app_key': "AVJGES72H5ZD34RZRA", 'user_key': "7XA72GLEWMUAFIZCWZZN"})

router.get('/users', (request, response) => {
  rp(eb_client)
  .then(results => {response.json(results)})
})

export default router
