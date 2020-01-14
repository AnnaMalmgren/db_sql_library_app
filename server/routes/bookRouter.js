'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/bookController')

router.get('/', controller.getBookTitles)
router.get('/:isbn', controller.getBook)

module.exports = router
