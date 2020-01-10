import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import NotFound from './components/errors/404'
import Books from './components/books/Books'
import * as serviceWorker from './serviceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/books' component={Books} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
