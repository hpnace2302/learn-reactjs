import React from 'react'
import SearchWeather from './components/search'
import InfoWeather from './components/infoWeather'
// import { api } from './services/api'
// import { helper } from './helpers/common'
import WeatherProvider from './context/weatherProvider'

class AppWeather extends React.PureComponent {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         loading: false,
    //         weather: {},
    //     }
    // }
    // // this.setState : là hàm xử lý bất đồng bộ
    // // custom hàm this.setState thành xử lý đồng bộ
    // setStateSync = (state) => {
    //     return new Promise (solve => {
    //         this.setState(state, solve);
    //     })
    // }

    // // hàm tìm kiếm thông tin theo tên thành phố
    // searchWeatherByCity = async (city = "") => {
    //     // console.log(city)
    //     if (city !== "") {
    //         // phải nhập giá trị thì mới xử lý
    //         // setState - đợi xử lý xong
    //         await this.setStateSync({...this.state, loading: true})
    //         // mới xử lý hành động khác khi state loading cập nhật xong
    //         const data = await api.getDataWeather(city)
    //         if (!helper.isEmptyObject(data)) {
    //             // phải có data trả về mới cập nhật lại state
    //             await this.setStateSync({...this.state, weather: data})
    //         }
    //         await this.setStateSync({...this.state, loading: false}) // cập nhật lại loading khi mọi thứ đã xong  
    //     }
    // }
    
    render() {
        return (
          <WeatherProvider>
            <SearchWeather
                // loading={this.state.loading}
                // search={this.searchWeatherByCity}
            />
            <InfoWeather
            />
            {/* {!helper.isEmptyObject(this.state.weather) && <InfoWeather
            />} */}

          </WeatherProvider>
        )
    }
}

export default AppWeather;