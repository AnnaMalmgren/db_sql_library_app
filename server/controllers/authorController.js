'use strict'

const mysql = require('../config/dbConnection')

const authorController = {}

authorController.getAuthors = async (req, res, next) => {
  const sql = `
    SELECT CONCAT(first_name, ' ', last_name) AS author, id
    FROM author
 `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

authorController.getWrites = async (req, res, next) => {
  let id = req.params.id
  const sql = `
    SELECT book.title, book.isbn, 
    CONCAT(author.first_name, ' ', author.last_name) AS author
    FROM book
    JOIN writes on book.isbn = writes.book_isbn
    JOIN author on writes.author_id = author.id AND author.id = ?
   `
  mysql.execute(sql, [id])
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = authorController
