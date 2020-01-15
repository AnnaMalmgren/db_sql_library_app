'use strict'

const mysql = require('../config/dbConnection')

const reviewController = {}

reviewController.getReviews = async (req, res, next) => {
  let isbn = req.params.isbn
  const sql = `
  SELECT books_score.title, books_score.score, books_score.comment, 
  CONCAT(student.first_name, ' ', student.last_name) AS student
  FROM books_score
  JOIN student ON books_score.student_id = student.id
  AND books_score.isbn = ?
  `
  mysql.execute(sql, [isbn])
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

reviewController.getReviewsStudent = async (req, res, next) => {
  const id = req.params.id
  const sql = `
    SELECT *
    FROM books_score
    WHERE student_id = ?
  `

  mysql.execute(sql, [id])
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

reviewController.postReviews = async (req, res, next) => {
  const { student, isbn, score, comment } = req.body
  const sql = `
    INSERT INTO review (student_id, isbn, score, comment)
    VALUES(?,?,?,?)
  `
  mysql.execute(sql, [student, isbn, score, comment])
    .then(() => res.send(JSON.stringify({ msg: `Review saved` })))
}

reviewController.deleteReviews = async (req, res, next) => {
  const sql = `
    DELETE
    FROM review
    WHERE id = ?
  `
  mysql.execute(sql, [req.params.id])
    .then(() => res.send(JSON.stringify({ msg: `Review deleted` })))
}

module.exports = reviewController
