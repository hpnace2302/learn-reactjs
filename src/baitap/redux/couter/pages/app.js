import React from 'react'
import CountResult from '../components/Count'
import DecrementCounter from '../components/Decrement'
import IncrementCounter from '../components/Increment'

const CounterPage = () => {
  return (
    <>
      <CountResult/>
      <DecrementCounter/>
      <IncrementCounter/>
    </>
  )
}

export default React.memo(CounterPage)