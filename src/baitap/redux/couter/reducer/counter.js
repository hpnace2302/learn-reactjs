// nơi xử lý và cập nhật state
import * as types from '../actions/type'

// định nghĩa state mặc định

const initialState = {
  count: 0
}

// định nghĩa reducer
// nó là 1 hàm nhận vào 2 tham số
// 1 là state cũ của ứng dụng
// 2 là action được store gọi vào
// căn cứ vào action để cập nhật lại state nhưng với điều kiện k là thay đổi state cũ

export const counterReducer = 
(state = initialState, action) => {
  // có 2 hành động khác nhau nhưng cùng xử lý cho 1 state nên chỉ cần 1 reducer để xử lý
  // về nguyên tắc các reducer sẽ đảm nhận nhiệm vụ cập nhật state cho từng action tương ứng
  // cần biết hành động nào sẽ được gọi vào reducer
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      // cập nhật và xử lý state
      // nguyên tắc là k đc làm thay đổi state cũ ban đầu
      // xử lý các kĩ thuật javascipt
      return { ...state, count: action.payload.val + 1}
    case types.DECREMENT_COUNTER: 
      return { ...state, count: action.payload.val - 1}
    default: return state
  }
}