'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookController')

router.get('/', controller.getBooks)

module.exports = router
