import React from 'react'
import { Input , Row, Col} from 'antd';
import PropTypes from 'prop-types'

const { Search } = Input;

const InputSeachMovies = (props) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Search 
          placeholder="movies name ..." 
          enterButton="Search" 
          size="large"
          loading={props.loading}
          onSearch={val => props.search(val)}
        />
      </Col>
    </Row>
  )
}

InputSeachMovies.propTypes = {
  loading: PropTypes.bool.isRequired,
  search: PropTypes.func.isRequired,
}

export default React.memo(InputSeachMovies)