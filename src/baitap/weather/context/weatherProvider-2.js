import React, {useState, useEffect}from 'react'
import CoronaContext from './index'
import {api} from '../services/api'
import {helper} from '../helpers/common'
import PropTypes from 'prop-types'

const WeatherProviderV2 = (props) => {
  const [loading, setLoading] = useState(false)
  const [weather, setWeather] = useState({})
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const data = await api.getDataWeather()
      if (!helper.isEmptyObject(data)) {
        setWeather(data)
      } else {
        setWeather({})
      }
      setLoading(false)
    }
    getData()
  },[]) // componentDidMount

  return (
    <>
      <CoronaContext.Provider value={{
        loading: loading, weather: weather}}>
        {props.children}
      </CoronaContext.Provider>
    </>
  )
}

WeatherProviderV2.propTypes = {
  children: PropTypes.node.isRequired
}

export default WeatherProviderV2