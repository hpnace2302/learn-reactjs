import React, {useState} from 'react'

let Counter = () => {
  const [count , setCount] = useState(0)
  const changeCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button onClick={changeCount}>+</button>
    </>
  )
}

export default Counter;