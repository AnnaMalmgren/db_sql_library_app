import React, { useState, useEffect } from 'react'
import '../../App.css'
import { NavLink, Link } from 'react-router-dom'

function Authors () {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch('/api/authors')
      res = await res.json()
      setAuthors(res)
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
      <div className='container'>
        <h2 className='p-2 m-2'>Authors</h2>
        <p>Too view books of specific author, click on the authors name</p>
        <div className='m-2, p-2'>
          <ul className='list-group text-left'>
            { authors.map(author =>
              <li className='list-group-item' key={author.id}>
                <Link to={`/author/${author.id}`} className='text-dark text-decoration-none'>
                  {author.authors}
                </Link>
              </li>) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Authors
