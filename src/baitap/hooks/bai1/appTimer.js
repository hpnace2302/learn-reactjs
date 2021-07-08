import React, {useState} from 'react';
import Timer from './timer'

const AppTimer = () => {
  const [show, setShowTimer] = useState(true)
  const showTimer = () => {
    setShowTimer(!show)
  }
  return (
    <>
      {show && <Timer/>}
      <br/>
      <button
        onClick={() => showTimer()}
      >Clear Timer</button>
    </>
  )
}

export default React.memo(AppTimer)