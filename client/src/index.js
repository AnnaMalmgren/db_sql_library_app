import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import NotFound from './components/errors/404'
import Books from './components/books/Books'
import Authors from './components/authors/Authors'
import Writes from './components/authors/Writes'
import Book from './components/books/Book'
import Student from './components/student/Student'
import Reviews from './components/reviews/Reviews'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/mypage/:id' component={Student} />
        <Route exact path='/books' component={Books} />
        <Route exact path='/authors' component={Authors} />
        <Route exact path='/book/:isbn' component={Book} />
        <Route exact path='/reviews/:isbn' component={Reviews} />
        <Route exact path='/author/:id' component={Writes} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
