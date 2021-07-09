// hành động của hệ thống khi mà ng dùng vào trang web , lập tức call data từ api backend về
// có 2 loại hành động
// 1 : action gửi lên
// 2 : action đc middleware nó xử lý

// hành động của hệ thống gửi đi
export const REQUEST_SERVER_FOOTBALL = Symbol('REQUEST_SERVER_FOOTBALL')

// hành động middleware redux saga nó nhận được action từ hệ thống web gửi lên
export const LOADING_GET_DATA = Symbol('LOADING_GET_DATA')

export const GET_DATA_SUCCESSFUL = Symbol('GET_DATA_SUCCESSFUL')
export const GET_DATA_EMPTY = Symbol('GET_DATA_EMPTY')
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL')
// chỉ có những hành động trên được dispatch vào reducer