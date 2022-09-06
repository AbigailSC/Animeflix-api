const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./routes/index.js')
const cors = require('cors')

const PORT = process.env.PORT || 3000

app.name = "databaseanimeflex"

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan('dev'))
app.use(cors())
app.use('/', routes)

app.listen(PORT, () => {
  console.log(`%s listening at ${PORT}`) // eslint-disable-line no-console
})

// Error catching endware.
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500
  const message = err.message || err
  console.error(err)
  res.status(status).send(message)
})

