'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/loanController')

router.get('/:isbn', controller.getAvailable)
router.get('/student/:id', controller.getLoansStudent)

module.exports = router
