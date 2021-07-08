import React from 'react'
import CoronaContext from './index'
import {api} from '../services/api'
import {helper} from '../helpers/common'

class CoronaProviders extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        loading: false, // tạo hiệu ứng loading call data - báo ng dùng chờ
        virus: { // state lưu thông tin data từ api

        },
        error: {} // thông báo lỗi
    }
  }
  setStateSync = (state) => {
    return new Promise (solve => {
        this.setState(state, solve)
    })
  }

  async componentDidMount () {
    await this.setStateSync({...this.state, loading: true})
    const data = await api.getDataVirusCorona()
    if (!helper.isEmptyObject(data)) {
      await this.setState({...this.state, virus: data, error: {}})
    } else {
      await this.setState({...this.state,virus: {} , error:{cod : 404, mess: 'Not found data'}})
    }
    await this.setStateSync({...this.state, loading: false})
  }

  render() {
    return (
      <CoronaContext.Provider value={this.state}>
        {this.props.children}
      </CoronaContext.Provider>
    )
  }
} 

export default CoronaProviders