'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookController')

router.get('/:title', controller.getAvailableBook)

module.exports = router
