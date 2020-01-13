'use strict'

const conn = require('../../../config/dbConnection')

const createTables = () => {
  const genres = `
  CREATE TABLE IF NOT EXISTS genre
  (
      id INT NOT NULL AUTO_INCREMENT,
      name VARCHAR(20) NOT NULL UNIQUE,
      PRIMARY KEY(id)
  ) ENGINE=InnoDB;
`
  conn.query(genres)
    .catch(err => console.log(err))

  const books = `
    CREATE TABLE IF NOT EXISTS books
    (
        title VARCHAR(50) NOT NULL,
        isbn VARCHAR(20) NOT NULL,
        published DATE NOT NULL,
        description LONGTEXT,
        language VARCHAR(20),
        genre_id INT NOT NULL,
        PRIMARY KEY(isbn),
        FOREIGN KEY(genre_id) REFERENCES genre(id)
    ) ENGINE=InnoDB;
  `
  conn.query(books)
    .catch(err => console.log(err))

  const copys = `
    CREATE TABLE IF NOT EXISTS copys
    (
        id INT NOT NULL AUTO_INCREMENT,
        isbn VARCHAR(20) NOT NULL,
        PRIMARY KEY(id),
        FOREIGN KEY(isbn) REFERENCES books(isbn)
    ) ENGINE=InnoDB;
  `
  conn.query(copys)
    .catch(err => console.log(err))

  const authors = `
  CREATE TABLE IF NOT EXISTS authors
  (
      id INT NOT NULL AUTO_INCREMENT,
      first_name VARCHAR(20) NOT NULL,
      last_name VARCHAR(20) NOT NULL,
      PRIMARY KEY (id)
  ) ENGINE=InnoDB;
`
  conn.query(authors)
    .catch(err => console.log(err))

  const students = `
  CREATE TABLE IF NOT EXISTS students
  (
      id varchar(20) NOT NULL UNIQUE,
      first_name VARCHAR(20) NOT NULL,
      last_name VARCHAR(20) NOT NULL,
      PRIMARY KEY (id)
  ) ENGINE=InnoDB;
`
  conn.query(students)
    .catch(err => console.log(err))

  const loans = `
    CREATE TABLE IF NOT EXISTS loans
    (
        copy_id INT(20) NOT NULL UNIQUE,
        student_id VARCHAR(20) NOT NULL,
        loan_date DATE NOT NULL,
        return_date DATE NOT NULL,
        PRIMARY KEY (copy_id),
        FOREIGN KEY(student_id) REFERENCES students(id)
    ) ENGINE=InnoDB;
  `
  conn.query(loans)
    .catch(err => console.log(err))

  const writes = `
    CREATE TABLE IF NOT EXISTS writes
    (
        author_id INT(11) NOT NULL,
        book_isbn VARCHAR(20) NOT NULL,
        PRIMARY KEY (author_id, book_isbn)
    ) ENGINE=InnoDB;
  `
  conn.query(writes)
    .catch(err => console.log(err))

  const reviews = `
    CREATE TABLE IF NOT EXISTS reviews
    (
        id INT NOT NULL AUTO_INCREMENT,
        student_id varchar(20) NOT NULL,
        isbn VARCHAR(20) NOT NULL,
        score INT NOT NULL,
        comment LONGTEXT,
        PRIMARY KEY (id),
        FOREIGN KEY(student_id) REFERENCES students(id),
        FOREIGN KEY(isbn) REFERENCES books(isbn)
    ) ENGINE=InnoDB;
  `
  conn.query(reviews)
    .catch(err => console.log(err))
}

createTables()
