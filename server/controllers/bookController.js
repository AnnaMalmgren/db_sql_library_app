'use strict'

const mysql = require('../config/dbConnection')

const bookController = {}

bookController.getBookTitles = async (req, res, next) => {
  const sql = `
    SELECT book.title, book.isbn, CONCAT(author.first_name, ' ', author.last_name) AS author
    FROM book
    JOIN writes ON book.isbn = writes.book_isbn
    JOIN author ON writes.author_id = author.id
    GROUP BY book.title
    `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

bookController.getBook = async (req, res, next) => {
  const title = req.params.isbn
  const sql = `
    SELECT book.title, AVG(books_score.score) AS score, book.description, book.language, book.published, 
    CONCAT(author.first_name, ' ', author.last_name) AS author, genre.name AS genre
    FROM book
    JOIN books_score ON book.isbn = books_score.isbn AND book.isbn = ?
    JOIN writes ON book.isbn = writes.book_isbn
    JOIN author ON writes.author_id = author.id
    JOIN genre on book.genre_id = genre.id
    GROUP BY author.id
    `
  mysql.execute(sql, [title])
    .then(([rows, fields]) => {
      res.send(JSON.stringify(rows))
    })
}

module.exports = bookController
