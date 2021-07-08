import React from 'react'
import {Row, Col, Input} from 'antd'
import PropTypes from 'prop-types'
import {api} from '../services/api'
import {helper} from '../helpers/common'
import WeatherContext from '../context/index'

const {Search} = Input

const SearchWeather = (props) => {
  // hàm tìm kiếm thông tin theo tên thành phố
  const searchWeatherByCity = async (city = "") => {
    // console.log(city)
    if (city !== "") {
        // phải nhập giá trị thì mới xử lý
        // setState - đợi xử lý xong
        await this.setStateSync({...this.state, loading: true})
        // mới xử lý hành động khác khi state loading cập nhật xong
        const data = await api.getDataWeather(city)
        if (!helper.isEmptyObject(data)) {
            // phải có data trả về mới cập nhật lại state
            await this.setStateSync({...this.state, weather: data})
        }
        await this.setStateSync({...this.state, loading: false}) // cập nhật lại loading khi mọi thứ đã xong  
    }
  }
    return (
        <WeatherContext.Consumer>
          {context => {
            return (
              <Row
                style={{margin: '30px 0'}}
              >
                <Col span={12} offset={6}>
                    <Search placeholder="name of city" 
                    loading={context.loading} 
                    enterButton="Search" 
                    onSearch={val => props.searchWeatherByCity(val)} // val là giá trị người dùng nhập vào ô input
                    // onSearch là sự kiện antd hỗ trợ
                    />
                </Col>
            </Row>
            )
          }}
        </WeatherContext.Consumer>
    )
}

SearchWeather.propTypes = {
    loading: PropTypes.bool.isRequired,
    search: PropTypes.func.isRequired,
}

export default React.memo(SearchWeather)