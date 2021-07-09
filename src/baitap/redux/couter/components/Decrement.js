import React from 'react'
import { decrementCounter } from '../actions/index'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// sử dụng connect

const DecrementCounter = (props) => {
  return (
    <button type="text" onClick={() => props.clkDecrement(props.count)}> - </button>
  )
}

// lấy state từ store sau sẽ chuyển thành props của component
const mapStateToProps = (state => ({
  count: state.counter.count
}))

// chuyển action thành props của component
// clkDecrement là props có type là 1 function
const mapDispatchToProps = (dispatch => ({
  clkDecrement : val => dispatch(decrementCounter(val)) 
}))

const ConnectDecrementCounter = connect(mapStateToProps, mapDispatchToProps)(DecrementCounter)

DecrementCounter.propTypes = {
  clkDecrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

export default React.memo(ConnectDecrementCounter)