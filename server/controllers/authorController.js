'use strict'

const mysql = require('../config/dbConnection')

const authorController = {}

authorController.getAuthors = async (req, res, next) => {
  const sql = `
    SELECT CONCAT(first_name, ' ', last_name) AS authors, id
    FROM authors
 `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

authorController.getWrites = async (req, res, next) => {
  const sql = `
    SELECT DISTINCT books.title, CONCAT(first_name, ' ', last_name) AS author
    FROM books
    JOIN writes on books.isbn = writes.book_isbn
    JOIN authors on writes.author_id = authors.id AND authors.id = '${req.params.id}'
   `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = authorController
