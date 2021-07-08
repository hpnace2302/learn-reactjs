import React from 'react'
import {Row , Col , Card , Image} from 'antd'
import PropTypes from 'prop-types'
import WeatherContext from '../context/index'
import { helper } from '../helpers/common'

const InfoWeather = () => {
    return (
      <WeatherContext.Consumer>
        {context => {
          if (helper.isEmptyObject(context.weather)) {
            return <h3>not found data !</h3>
          } else {
            return (
              <Row>
                  <Col span={20} offset={2}>
                      <Card size="small" title="Thông tin thời tiết">
                          <p>- Nhiệt độ : {context.weather.temp}</p>
                          <p>- Thông tin : {context.weather.main} </p>
                          <div><Image src={`http://openweathermap.org/img/w/${context.weather.icon}.png`}/></div>
                          <p>- Miểu tả : {context.weather.description}</p>
                          <p>- Áp suất : {context.weather.pressure}</p>
                          <p>- Độ ẩm : {context.weather.humidity}</p>
                      </Card>
                  </Col>
              </Row>
            )
          }
        }}
      </WeatherContext.Consumer>
    )
}

InfoWeather.propTypes = {
    dataWeather: PropTypes.object.isRequired,
}

export default React.memo(InfoWeather);