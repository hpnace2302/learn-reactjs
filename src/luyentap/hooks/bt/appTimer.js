import React,{useState} from 'react'
import TimeClock from './timer'

const App = () => {
  const [show,setShowTimer] = useState(true)

  const showTimer = () => {
    setShowTimer(!show)
  }
  return (
    <>
      {show && <TimeClock/>}
      <br/>
      <button onClick={() => showTimer()}>Clear Timer</button>
    </>
  )
}

export default React.memo(App)