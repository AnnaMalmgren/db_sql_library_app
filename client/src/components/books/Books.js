import React, { useState, useEffect } from 'react'
import '../../App.css'
import { NavLink } from 'react-router-dom'

function Books () {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fechData = () => {
      window.fetch('/api/books')
        .then(res => res.json())
        .then(setBooks)
    }
    fechData()
  }, [])

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <div className='navbar'>
          <NavLink to='/' className='text-light nav-link'> HOME</NavLink>
        </div>
      </nav>
      <h2>Books</h2>
      <div>
        { books.map(book => <li>{book.titel}, by {book.author}</li>) }
      </div>
    </div>
  )
}

export default Books
