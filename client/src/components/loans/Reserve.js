import React, { useEffect } from 'react'
import '../../App.css'

function Reserve (props) {
  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/reserve/${props.isbn}`)
      res = await res.json()
      console.log(res)
    }
    fechData()
  }, [])

  return (
    <div className='App'>
      <div>
        <p>
          <strong>Available Copies:</strong> {}
        </p>
      </div>
    </div>
  )
}

export default Reserve
