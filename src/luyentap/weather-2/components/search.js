import React from 'react'
import {Row, Col, Input} from 'antd'

const {Search} = Input

const SearchWeather = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Search 
                    placeholder="name of city"
                    loading={false}
                    enterButton="Search"
                />
            </Col>
        </Row>
    )
}

export default React.memo(SearchWeather)