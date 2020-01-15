import React, { useState } from 'react'
import '../../App.css'

function DeleteReview (review) {
  const [display, setDisplay] = useState(false)
  const [msg, setMsg] = useState('')

  const deleteRev = async () => {
    let res = await sendReview()
    let userMsg = <p className='alert alert-success'>{res.msg}</p>
    return userMsg
  }

  const sendReview = async () => {
    let res = await window.fetch(`/api/reviews/${review.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
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
