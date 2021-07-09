import * as types from './type'

// nếu k có tham số gì gửi lên thì k cần payload
export const requestDataToServer = () => ({
  type: types.REQUEST_SERVER_FOOTBALL
})

// các hành động của saga
export const loadingGetData = (loading) => ({
  type: types,
  loading
})

export const getDataSuccessful = (data) => ({
  type: types.GET_DATA_SUCCESSFUL,
  data
})

export const getDataEmpty = (message) => ({
  type: types.GET_DATA_EMPTY,
  message
})

export const getDataFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error
})