import React, { useState, useEffect } from 'react'
import '../../App.css'
import Comments from './Comments'
import AddReview from '../reviews/AddReview'
import { NavLink, useHistory, useParams } from 'react-router-dom'

function Student () {
  const history = useHistory()
  const [loans, setLoans] = useState([])
  const student = useParams()

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/loans/student/${student.id}`)
      res = await res.json()
      console.log('res ' + res)
      setLoans(res)
    }
    fechData()
  }, [student.id])

  const studentsLoans = () => {
    if (loans.length > 0) {
      let loanedBooks = loans.map(loan => {
        return <div key={loan.title}>
          <p><strong>{loan.title}</strong></p>
          <p>Loan date: {loan.loan_date}</p>
          <p>Return latest: {loan.return_date}</p>
          <AddReview {...loan} />
          <hr />
        </div>
      })
      return loanedBooks
    } else {
      return 'You have no loaned book'
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
      <div className='container'>
        <h2 className='pt-2 mt-2 pb-2 mb-2'>My Page</h2>
        <section className='text-left'>
          <h3 className='pt-2 mt-2'>Loans</h3>
          { studentsLoans() }
          <h3 className='pt-2 mt-2 pb-2 mb-2'>Reviews</h3>
          <Comments {...student} />
        </section>
      </div>
    </div>
  )
}

export default Student
