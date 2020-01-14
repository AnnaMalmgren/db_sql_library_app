'use strict'

const mysql = require('../config/dbConnection')

const loanController = {}

loanController.getAvailable = async (req, res, next) => {
  const sql = `
    SELECT available, isbn 
    FROM available_books
    WHERE isbn = ${req.params.isbn}
    `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

loanController.getLoansStudent = async (req, res, next) => {
  const sql = `
    SELECT books.title, loans.return_date, loans.loan_date, copys.isbn
    FROM loans
    JOIN copys ON loans.copy_id = copys.id AND loans.student_id = '${req.params.id}'
    JOIN books ON copys.isbn = books.isbn
    `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = loanController
