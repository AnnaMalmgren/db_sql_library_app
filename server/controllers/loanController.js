'use strict'

const mysql = require('../config/dbConnection')

const loanController = {}

loanController.getAvailable = async (req, res, next) => {
  const isbn = req.params.isbn
  const sql = `
    SELECT available
    FROM available_books
    WHERE isbn = ?
    `
  mysql.execute(sql, [isbn])
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

loanController.getLoansStudent = async (req, res, next) => {
  let id = req.params.id
  const sql = `
    SELECT book.title, loan.return_date, loan.loan_date, copy.isbn
    FROM loan
    JOIN copy ON loan.copy_id = copy.id AND loan.student_id = ?
    JOIN book ON copy.isbn = book.isbn
    `
  mysql.execute(sql, [id])
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = loanController
