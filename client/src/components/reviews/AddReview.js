import React, { useState } from 'react'
import '../../App.css'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function AddReview (loan) {
  const student = useParams()
  const { register, handleSubmit } = useForm()
  const [display, setDisplay] = useState(false)
  const [msg, setMsg] = useState('')

  const onSubmit = async (data) => {
    const review = {
      score: data.score,
      comment: data.comment,
      isbn: loan.isbn,
      student: student.id
    }

    let res = await sendReview(review)
    let userMsg = <p className='alert alert-success'>{res.msg}</p>
    setMsg(userMsg)
  }

  const sendReview = async (review) => {
    let res = await window.fetch(`/api/reviews/`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(review)
    })
    res = await res.json()
    return res
  }

  const displayForm = () => {
    if (display === true) {
      return <div className='modal-dialog modalContainer shadow' tabIndex='1'>
        <div className='modal-content bg-light'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group m-2'>
              {msg}
              <label htmlFor='score'>Score</label>
              <input ref={register} type='text' name='score' placeholder='Enter score' className='form-control' />
              <label htmlFor='comment'>Comment</label>
              <textarea ref={register} name='comment' placeholder='Enter comment' className='form-control' />
              <button className='btn btn-primary mt-2'>Submit</button>
            </div>
          </form>
          <button onClick={() => setDisplay(false)} className='btn btn-secondary'>Close</button>
        </div>
      </div>
    } else {
      return <button onClick={() => setDisplay(true)} className='btn btn-sm btn-secondary ml-2 pl-2'>
        Add Review
      </button>
    }
  }

  return (
    displayForm()
  )
}

export default AddReview
