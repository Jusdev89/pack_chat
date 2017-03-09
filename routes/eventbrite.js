require('dotenv').config()
import express from 'express'
const router = express.Router()
const Eventbrite = require('eventbrite')

const eb_client = Eventbrite({'app_key': process.env.EB_APP_KEY, 'user_key': process.env.EB_USER_KEY})
console.log('Do I get keys?', eb_client)

router.get('/', (request, response) => {
  eb_client.user( {'users': user }, function(err, data){
    console.log(err);
    console.log(data);
    response.json(data)})
  })

export default router
