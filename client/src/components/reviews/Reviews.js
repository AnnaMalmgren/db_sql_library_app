import React, { useState, useEffect } from 'react'
import '../../App.css'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router'

function Reviews () {
  const history = useHistory()
  const [reviews, setReviews] = useState([])
  const [title, setTitle] = useState('')
  let param = useParams()

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/reviews/${param.isbn}`)
      res = await res.json()
      setReviews(res)
      setTitle(res[0].title)
    }
    fechData()
  }, [param.isbn])

  return (
    <div className='modal-dialog modalContainer shadow' tabIndex='1'>
      <div className='modal-content bg-light'>
        <h2 className='bg-dark text-light p-2'>Comments for { title }</h2>
        { reviews.map(review =>
          <section className='p-2' key={review.student}>
            <p><strong>Score</strong>: {review.score}</p>
            <p><strong>Comment: </strong>{review.comment}</p>
            <p>By: {review.student}</p>
            <hr />
          </section>) }
        <button onClick={() => history.goBack()} className='btn btn-secondary'>Close</button>
      </div>
    </div>
  )
}

export default Reviews
