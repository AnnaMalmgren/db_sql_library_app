import React, { useState, useEffect } from 'react'
import '../../App.css'

function Loans (props) {
  const [available, setAvailable] = useState('')

  useEffect(() => {
    const fechData = async () => {
      let res = await window.fetch(`/api/loans/${props.isbn}`)
      res = await res.json()
      setAvailable(res[0].available)
    }
    fechData()
  }, [props.isbn])

  return (
    <div className='App'>
      <div className='text-left'>
        <p>
          <strong>Available Copies:</strong> { available }
        </p>
      </div>
    </div>
  )
}

export default Loans
