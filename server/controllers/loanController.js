'use strict'

const mysql = require('../config/dbConnection')

const loanController = {}

loanController.getBookTitlesgetAvailableBook = async (req, res, next) => {
  const sql = `
    SELECT DISTINCT books.title, CONCAT(authors.first_name, ' ', authors.last_name) AS author
    FROM books
    JOIN writes ON books.isbn = writes.book_isbn
    JOIN authors ON writes.author_id = authors.id
    GROUP BY books.title
    `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = loanController
