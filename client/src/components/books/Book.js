import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Loans from '../loans/Loans'
import '../../App.css'
import { NavLink, Link, useHistory } from 'react-router-dom'

function Book () {
  const history = useHistory()
  const [book, setBook] = useState({})
  const [author, setAuthor] = useState([])
  const [score, setScore] = useState('')
  let param = useParams()

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/books/${param.isbn}`)
      res = await res.json()
      setBook(getBook(res))
      setScore(res[0].score)
      let authors = []
      for (let obj in res) {
        authors.push(res[obj].author)
      }

      setAuthor(authors)
    }
    fechData()
  }, [param.isbn])

  const reviews = () => {
    return score > 0
      ? <Link to={'/reviews/' + param.isbn} className='bg-info text-white p-1 m-1' >
        View scores with comments
      </Link>
      : <p><strong><i>This book has no reviews yet</i></strong></p>
  }

  const getBook = (books) => {
    return {
      title: books[0].title,
      genre: books[0].genre,
      published: books[0].published,
      language: books[0].language,
      description: books[0].description,
      author: books.map(book => book.author)
    }
  }

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <div className='navbar'>
          <NavLink to='/' className='text-light nav-link'> HOME</NavLink>
          <button onClick={() => history.goBack()} className='nav-link'>Back</button>
        </div>
      </nav>
      <div className='container text-left'>

        <div key={book.title}>
          <h2 className='mt-2 pt-2 mb-2 pb-2'>{book.title}</h2>
          <p><strong>Author:</strong>{author.map(auth => <i key={auth}> {auth} </i>)}</p>
          <p><strong>Genre:</strong> { book.genre }</p>
          <p><strong>Published:</strong> { book.published }</p>
          <p><strong>Language:</strong> { book.language }</p>
          <p><strong>Average Score:</strong> { score > 0 ? score : 'This book hasn\'t been scored' }</p>
          <Loans {...param} />
          <p><strong>Description:</strong><br /> { book.description }</p>
        </div>

        <div />

        { reviews() }
      </div>
    </div>
  )
}

export default Book
