import React from 'react'
import WeatherContext from './index'
import { helper } from '../helpers/common'
import { api } from '../services/api'

class WeatherProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      weather: {},
    }
  }
  setStateSync = (state) => {
    return new Promise (solve => {
        this.setState(state, solve);
    })
  }
  async componentDidMount() {
    await this.setStateSync({...this.state, loading: true});
    const data = await api.getDataWeather()
    if (!helper.isEmptyObject(data)) {
      await this.setStateSync({...this.state, weather: data});
    } else {
      await this.setStateSync({...this.state, weather: {}})
    }
    await this.setStateSync({...this.state, loading: false});
  }
  render() {
    return (
      <WeatherContext.Provider value={this.state}>
        {this.props.children}
      </WeatherContext.Provider>
    )
  }
}

export default WeatherProvider