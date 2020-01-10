'use strict'

const mysql = require('../config/dbConnection')

const bookController = {}

bookController.getBooks = async (req, res, next) => {
  const sql = `
  SELECT * 
  FROM books
  `
  mysql.execute(sql)
    .then(([rows, fields]) => {
      console.log(rows)
      res.send(JSON.stringify(rows))
    })
}

module.exports = bookController
