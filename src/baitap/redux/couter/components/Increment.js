import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {incrementCounter} from '../actions/index'

// sử dụng hooks

const IncrementCounter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.count)

  const dispatchIncrement = () => {
    // gọi action vào store
    dispatch(incrementCounter(count))
  }

  return (
    <button type="text" onClick={() => dispatchIncrement()}> + </button>
  )
}

export default React.memo(IncrementCounter)