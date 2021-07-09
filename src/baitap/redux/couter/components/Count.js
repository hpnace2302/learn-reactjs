import React from 'react'
import { useSelector } from 'react-redux'

const CountResult = () => {
  const counter = useSelector(state => state.counter.count)
  // lấy state từ reducer trong store
  return (
    <h1>{counter}</h1>
  )
}

export default React.memo(CountResult)