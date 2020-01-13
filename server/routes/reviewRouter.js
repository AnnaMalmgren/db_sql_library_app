'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController')

router.get('/:title', controller.getReviews)

module.exports = router
