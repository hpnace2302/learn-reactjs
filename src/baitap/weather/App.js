import React, {useState} from 'react'
// import SearchWeather from './components/search'
import InfoWeather from './components/infoWeather'
// import { api } from './services/api'
// import { helper } from './helpers/common'
import WeatherProvider from './context/weatherProvider-2'


const AppWeather = () => {
  // const [loading, setLoading] = useState(false)
  // const [weather, setWeather] = useState({})
  
  // const searchWeatherByCity = async (city = '') => {
  //   if (city !== "") {
  //             // phải nhập giá trị thì mới xử lý
  //             // setState - đợi xử lý xong
  //             setLoading(true)
  //             // mới xử lý hành động khác khi state loading cập nhật xong
  //             const data = await api.getDataWeather(city)
  //             if (!helper.isEmptyObject(data)) {
  //                 // phải có data trả về mới cập nhật lại state
  //                 setWeather(data)
  //             }
  //             setLoading(false)
  //         }
  // }
  return (
    <WeatherProvider>
            {/* <SearchWeather
                // loading={this.state.loading}
                // search={this.searchWeatherByCity}
            /> */}
            <InfoWeather
            />
            {/* {!helper.isEmptyObject(this.state.weather) && <InfoWeather
            />} */}

          </WeatherProvider>

  )
}

export default AppWeather