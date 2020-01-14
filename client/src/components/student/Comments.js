import React, { useState, useEffect } from 'react'
import DeleteReview from '../reviews/DeleteReview'
import '../../App.css'

function Comments (props) {
  const [display, setDisplay] = useState(false)
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/reviews/student/${props.id}`)
      res = await res.json()
      setReviews(res)
    }
    fechData()
  }, [props.id])

  const displayReviews = () => {
    if (display === true) {
      return getReviews()
    } else {
      return <button onClick={() => setDisplay(true)} className='btn btn-info ml-2 pl-2'>
        Display my reviews
      </button>
    }
  }

  const getReviews = () => {
    return reviews.length > 0
      ? <div className='modal-dialog modalContainer shadow' tabIndex='1'>
        <div className='modal-content bg-light'>
          { reviews.map(review =>
            <section className='p-2' key={review.title + review.comment}>
              <p><strong>{review.title}</strong></p>
              <p><strong>Score</strong>: {review.score}</p>
              <p><strong>Comment: </strong>{review.comment}</p>
              <DeleteReview {...review} />
              <hr />
            </section>) }
          <button onClick={() => setDisplay(false)} className='nav-link'>Close</button>
        </div>
      </div>
      : <p>You haven't made any reviews</p>
  }

  return (
    displayReviews()
  )
}

export default Comments
