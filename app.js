import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import index from './routes/index'
import users from './routes/eventbrite'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/v1', index)
app.use('/api/v1/users', users)

app.use(function(request, response, next) {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use(function(error, request, response) {
  response.locals.message = error.message
  response.locals.error = request.app.get('env') === 'development' ? error : {}

  response.status(error.status || 500)
  response.json({error})
})

export default app
