'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/authorController')

router.get('/', controller.getAuthors)
router.get('/:id', controller.getWrites)

module.exports = router
