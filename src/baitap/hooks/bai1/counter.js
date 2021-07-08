import React, {useState} from 'react'

export default function Counter() {
  // khai báo state
  const [count, setCount] = useState(0)
  // 0 : gán giá trị mặc định cho state
  // useState : luôn trả về 1 mảng chứa 2 thành phần : state và phương thức cập nhật state 
  // count : state
  // setCount : hàm thay đổi state
  // vì trong fucnc k tồn tại this.setState nên cần dùng hooks useState để thay đổi state
  // vì trong func component k có constructor để khai báo state nên cần dùng hooks useState để khai báo state
  // tất cả hooks trong reactjs luôn có tiền tố use đứng trước  : ví dụ : useContext, useState
  // tất cả các hooks chỉ được sử dụng trong func component
  const changeCount = () => {
    // setCount dùng thay đổi state đã được khai báo
    // count là state 
    setCount(count+ 1)
  }
  return (
    <> 
      <h1>{count}</h1>
      <button onClick={() => changeCount()}>+</button>
    </>
  )
}