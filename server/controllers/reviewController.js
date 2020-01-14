'use strict'

const mysql = require('../config/dbConnection')

const reviewController = {}

reviewController.getReviews = async (req, res, next) => {
  const sql = `
  SELECT books_score.title, books_score.score, books_score.comment, CONCAT(students.first_name, ' ', students.last_name) AS student
  FROM books_score
  JOIN students ON books_score.student_id = students.id
  AND books_score.isbn = '${req.params.isbn}'
  `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

reviewController.getReviewsStudent = async (req, res, next) => {
  const sql = `
    SELECT title, comment, score, isbn
    FROM books_score
    WHERE student_id = '${req.params.id}'
  `

  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

reviewController.postReviews = async (req, res, next) => {
  const { student, isbn, score, comment } = req.body
  const sql = `
    INSERT INTO reviews (student_id, isbn, score, comment)
    VALUES(?,?,?,?)
  `
  mysql.execute(sql, [student, isbn, score, comment])
    .then(() => res.send(JSON.stringify({ msg: `Review saved` })))
}

reviewController.deleteReviews = async (req, res, next) => {
  const { student, isbn, score, comment } = req.body
  const sql = `
    DELETE
    FROM reviews
    WHERE student_id = '${student}' AND isbn = '${isbn}' AND score = '${score}' AND comment = '${comment}'
  `
  mysql.execute(sql)
    .then(() => res.send(JSON.stringify({ msg: `Review deleted` })))
}

module.exports = reviewController
