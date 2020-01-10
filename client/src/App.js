import React from 'react'
import './App.css'

function App () {
  return (
    <div className='App'>
      <div class='jumbotron jumbotron-fluid'>
        <div class='container'>
          <h1 class='display-4'>Your university library</h1>
          <p class='lead'>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <a href='/books' class='badge badge-info'>
        <h2>Books</h2>
      </a>
    </div>
  )
}

export default App
