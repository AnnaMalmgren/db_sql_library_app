import React, { useState } from 'react'
import './App.css'
import { NavLink, Link } from 'react-router-dom'

function App () {
  const [student] = useState({
    id: 'am223rj'
  })

  return (
    <div className='App'>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <div className='navbar'>
          <NavLink to='/' className='text-light nav-link'> HOME</NavLink>
          <Link to={`/mypage/${student.id}`} className='text-light nav-link'>My Page</Link>
        </div>
      </nav>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Your university library</h1>
          <p className='lead'>Read review and choose books with ease.</p>
        </div>
      </div>
      <a href='/books' className='btn btn-info btn-lg p-2 m-2'>
        List all Books
      </a>
      <a href='/authors' className='btn btn-info btn-lg p-2 m-2'>
        List all authors
      </a>
    </div>
  )
}

export default App
