import React from 'react'
import { useSelector } from 'react-redux'


const FinalValue = () => {
    const count = useSelector((state) => state.counter.counted)

  return (
    <h1>FinalValue is:{count}</h1>
  )
}

export default FinalValue