import React, {useEffect, useRef , useState} from 'react'

const TimeClock = () => {
  const [timeString, setTimeString] = useState(null);
  const intervalRef = useRef(null);
  useEffect(() => {
  intervalRef.current = setInterval(() => {
  const now = new Date();
  const hours = `0${now.getHours()}`.slice(-2);
  const minutes = `0${now.getMinutes()}`.slice(-2);
  const seconds = `0${now.getSeconds()}`.slice(-2);
  const currentTimeString = `${hours}:${minutes}:${seconds}`;
  setTimeString(currentTimeString);
  }, 1000);
  // componentWillUnMount()
  return () => {
    // biết component bị xoá
    // hành động setInterval chưa bị mất
    // cần huỷ hành động trc khi component bị xoá
    clearInterval(intervalRef.current);
  };
  }, []); // chạy như 1 componentDidmount
  return (
    <div style={{ fontSize: '48px' }}>{timeString}</div>
  );
}

export default React.memo(TimeClock)