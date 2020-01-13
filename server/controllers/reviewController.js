'use strict'

const mysql = require('../config/dbConnection')

const reviewController = {}

reviewController.getReviews = async (req, res, next) => {
  const sql = `
  SELECT books_score.title, books_score.score, books_score.comment, CONCAT(students.first_name, ' ', students.last_name) AS student
  FROM books_score
  JOIN reviews on reviews.comment = books_score.comment AND books_score.title = '${req.params.title}'
  JOIN students on reviews.student_id = students.id
  `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = reviewController
