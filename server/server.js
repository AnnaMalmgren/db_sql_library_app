'use strict'

const helmet = require('helmet')
const express = require('express')

const app = express()

app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/books', require('./routes/bookRouter'))
app.use('/api/authors', require('./routes/authorRouter'))
app.use('/api/reviews', require('./routes/reviewRouter'))

app.listen(process.env.PORT || 5500)

module.exports = app
