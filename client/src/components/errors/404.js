import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Renders 404 page
 */
const NotFound = () => (
  <div className='container border border-danger mt-5'>
    <h1 className='text-center m-2 p-2' >Oops!</h1>
    <h2 className='text-center m-2 p-2'>404 not found!</h2>
    <p className='text-center m-2 p-2 notFoundText'>Sorry, an error has occured. The page you tried to view can't be found. </p>
    <p className='text-center m-2 p-2'>
      <NavLink to='/' className='badge badge-info p-2 notFoundText'>
             Go to Homepage
      </NavLink>
    </p>
  </div >
)

export default NotFound
