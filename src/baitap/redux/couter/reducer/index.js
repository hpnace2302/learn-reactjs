// nơi combine các reducer

import { combineReducers } from 'redux'
import { counterReducer as counter } from './counter'

const rootReducer = combineReducers ({
  counter
  // counter : counter
})

export default rootReducer