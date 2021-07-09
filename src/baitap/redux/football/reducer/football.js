import * as types from '../actions/type'

const initialState = {
  loading: false,
  football: {},
  message: {},
  error: {},
}

export const footballReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING_GET_DATA:
      return {
        ...state,
        ...{ loading: action.loading }
      }
    case types.GET_DATA_SUCCESSFUL:
      return {
        ...state,
        ...{football: action.data, message: {}, error: {}}
      }
    case types.GET_DATA_EMPTY:
      return {
        ...state,
        ...{message: action.message, football: {}, error: {}}
      }
    case types.GET_DATA_FAIL:
      return {
        ...state,
        ...{error: action.error, football: {}, message: {}}
      }
    default:
      return state;
  }
}