import express from 'express'
const router = express.Router()

router.get('/home', function(request, response) {
  response.json({name: 'Packchat'})
})

export default router
