'use strict'

const express = require('express')
const router = express.Router()
const controller = require('../controllers/reviewController')

router.get('/:isbn', controller.getReviews)
router.post('/', controller.postReviews)
router.post('/delete', controller.deleteReviews)
router.get('/student/:id', controller.getReviewsStudent)
router.get('/student/:id', controller.getReviewsStudent)

module.exports = router
