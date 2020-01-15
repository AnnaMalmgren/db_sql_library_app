'use strict'

const conn = require('../../../config/dbConnection')
const bookData = require('./Data/Books.json')
const authorData = require('./Data/Authors.json')
const studentData = require('./Data/Students.json')
const genreData = require('./Data/Genres.json')
const loanData = require('./Data/Loans.json')
const reviewData = require('./Data/Reviews.json')
const writeData = require('./Data/Writes.json')
const copyData = require('./Data/Copys.json')

const seedGenreTable = () => {
  for (let genre in genreData) {
    conn.execute(
      'INSERT INTO genre (name) VALUES (?)',
      [genreData[genre].name])
      .catch(e => console.log(e))
  }
}
const seedBookTable = () => {
  for (let book in bookData) {
    conn.execute(
      'INSERT INTO book (title, isbn, published, description, language, genre_id) VALUES (?,?,?,?,?,?)',
      [bookData[book].title, bookData[book].isbn, bookData[book].published, bookData[book].description, bookData[book].language, bookData[book].genre])
      .catch(e => console.log(e))
  }
}

const seedCopyTable = () => {
  for (let copy in copyData) {
    conn.execute(
      'INSERT INTO copy (isbn) VALUES (?)',
      [copyData[copy].isbn])
      .catch(e => console.log(e))
  }
}

const seedAuthorTable = () => {
  for (let author in authorData) {
    conn.execute(
      'INSERT INTO author(first_name, last_name) VALUES (?,?)',
      [authorData[author].first_name, authorData[author].last_name])
      .catch(e => console.log(e))
  }
}

const seedStudentTable = () => {
  for (let student in studentData) {
    conn.execute(
      'INSERT INTO student (id, first_name, last_name) VALUES (?,?,?)',
      [studentData[student].id, studentData[student].first_name, studentData[student].last_name])
      .catch(e => console.log(e))
  }
}

const seedLoanTable = () => {
  for (let loan in loanData) {
    conn.execute(
      'INSERT INTO loan (copy_id, student_id, loan_date, return_date) VALUES (?,?,?,?)',
      [loanData[loan].books_id, loanData[loan].student_id, loanData[loan].loan_date, loanData[loan].return_date])
      .catch(e => console.log(e))
  }
}

const seedWriteTable = () => {
  for (let writer in writeData) {
    conn.execute(
      'INSERT INTO writes (author_id, book_isbn) VALUES (?,?)',
      [writeData[writer].author_id, writeData[writer].isbn])
      .catch(e => console.log(e))
  }
}

const seedReviewTable = () => {
  for (let review in reviewData) {
    conn.execute(
      'INSERT INTO review (student_id, isbn, score, comment) VALUES (?,?,?,?)',
      [reviewData[review].student_id, reviewData[review].book_isbn, reviewData[review].score, reviewData[review].comment])
      .catch(e => console.log(e))
  }
}

seedGenreTable()
seedBookTable()
seedCopyTable()
seedAuthorTable()
seedWriteTable()
seedStudentTable()
seedLoanTable()
seedReviewTable()
