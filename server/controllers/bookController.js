'use strict'

const mysql = require('../config/dbConnection')

const bookController = {}

bookController.getBookTitles = async (req, res, next) => {
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

bookController.getBook = async (req, res, next) => {
  const sql = `
    SELECT books.title, AVG(books_score.score) AS score, books.description, books.language, books.published, CONCAT(authors.first_name, ' ', authors.last_name) AS author
    FROM books
    JOIN books_score ON books.title = books_score.title AND books.title = '${req.params.title}'
    JOIN writes ON books.isbn = writes.book_isbn
    JOIN authors ON writes.author_id = authors.id
   
    `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

bookController.getSearch = async (req, res, next) => {
  console.log('I AM USED')
  const sql = `
    SELECT DISTINCT books.title, CONCAT(authors.first_name, ' ', authors.last_name) AS author
    FROM books
    JOIN writes ON books.isbn = writes.book_isbn
    JOIN authors ON writes.author_id = authors.id
    HAVING books.title LIKE '%${req.params.title}%'
    `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = bookController
