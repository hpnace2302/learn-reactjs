import React from 'react'
import {Input, Row, Col} from 'antd'
import PropTypes from 'prop-types'
const {Search} = Input

const InputSeachMovie = (props) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Search 
          placeholder="movies name..."
         enterButton="Search" 
         size="large" 
         loading={props.loading}
          onSearch={val => this.search(val)}
          />
      </Col>
    </Row>
  )
}

InputSeachMovie.propTypes = {
  loading: PropTypes.bool,
  onSearch: PropTypes.func.isRequired,
}

export default React.memo(InputSeachMovie)