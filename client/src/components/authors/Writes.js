import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../../App.css'
import { NavLink, Link, useHistory } from 'react-router-dom'

function Writes () {
  const history = useHistory()
  const [books, setBooks] = useState([])
  const [name, setName] = useState('')
  let author = useParams()

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/authors/${author.id}`)
      res = await res.json()
      setBooks(res)
      setName(res[0].author)
    }
    fechData()
  }, [author.id])

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <div className='navbar'>
          <NavLink to='/' className='text-light nav-link'> HOME</NavLink>
          <button onClick={() => history.goBack()} className='nav-link'>Back</button>
        </div>
      </nav>
      <div className='container'>
        <h2 className='p-2 m-2'> { name } </h2>
        <p>Too see more detailed information about a specific book, click on the title</p>
        <div className='p-2 m-2'>
          <ul className='list-group text-left'>
            { books.map(book =>
              <li className='list-group-item' key={book.isbn}>
                <Link to={'/book/' + book.isbn} className='text-dark text-decoration-none'>
                  <strong>{book.title}</strong>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Writes
