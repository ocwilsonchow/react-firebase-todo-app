import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loading() {
  return (
    <div className="text-center">
      <Spinner animation="border" />
    </div>
  )
}

export default Loading
