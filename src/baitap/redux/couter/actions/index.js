import * as types from './type'

// đây là nơi định nghĩa action
// action là 1 hàm sẽ trả về pure obj thông thường sẽ bao gồm 2 thuộc tính cơ bản : type và payload
// type : tên hành động 
// payload : giá trị truyền lên của action

export const decrementCounter = (val) => ({
  type: types.DECREMENT_COUNTER,
  payload: {val}
})

export const incrementCounter = (val) => ({
  type: types.INCREMENT_COUNTER,
  payload: {val}
})