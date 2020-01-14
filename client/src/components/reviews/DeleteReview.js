import React, { useState } from 'react'
import '../../App.css'
import { useParams } from 'react-router-dom'

function DeleteReview (review) {
  const student = useParams()
  const [display, setDisplay] = useState(false)
  const [msg, setMsg] = useState('')

  const deleteRev = async () => {
    const reviewToDelete = {
      score: review.score,
      comment: review.comment,
      isbn: review.isbn,
      student: student.id
    }
    let res = await sendReview(reviewToDelete)
    let userMsg = <p className='alert alert-success'>{res.msg}</p>
    return userMsg
  }

  const sendReview = async (reviewToDelete) => {
    let res = await window.fetch(`/api/reviews/delete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reviewToDelete)
    })
    res = await res.json()
    return res
  }

  const displayForm = () => {
    if (display === true) {
      return <div className='modal-dialog modalContainer shadow' tabIndex='1'>
        <div className='modal-content bg-light'>
          {msg}
          <p>Are you sure you want to delete the review?</p>
          <button onClick={() => setDisplay(false)} className='btn btn-info'>Close</button>
          <button onClick={async () => { let res = await deleteRev(); setMsg(res) }} className='btn btn-danger'>Delete</button>

        </div>
      </div>
    } else {
      return <button onClick={() => setDisplay(true)} className='btn btn-sm btn-secondary ml-2 pl-2'>
        Delete Review
      </button>
    }
  }

  return (
    displayForm()
  )
}

export default DeleteReview
