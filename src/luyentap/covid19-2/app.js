import React from 'react'
import GlobalCorona from './component/Global-v2'
import LayoutCorona from './component/Layout-v2'
import CountriesCorona from './component/Countries-v2'
import CoronaProvider from './context/CovidProvider-v2'
// import './style.css'
// import {api} from './services/api'
// import { helper} from './helpers/common'

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         loading: false, // tạo hiệu ứng loading call data - báo ng dùng chờ 
    //         virus: {}, // lưu trữ thông tin data từ api
    //         error: {}, // thông báo lỗi
    //     }
    // }
    // async componentDidMount() {
    //     // setState loading về true
    //     // immutable state : 
    //     this.setState({...this.state,loading: true })
    //     // call api
    //     const data = await api.getDataVirusCorona()
    //     // kiểm tra xem obj data có rỗng k ?
    //     if (!helper.isEmptyObject(data)) {
    //         // thực sự data có trả về dữ liệu
    //         this.setState({
    //             ...this.state,
    //             error: {},
    //             virus: data
    //         })
    //     } else {
    //         // api k có dữ liệu trả về
    //         this.setState({
    //             ...this.state,
    //             error: {cod: 404 , mess: 'Not found data'},
    //             virus: {}
    //         })
    //     }
    //     this.setState({...this.state, loading : false})
    // }
    render() {
        // console.log(this.state.virus)

        // if (this.state.loading) {
        //     return (
        //         <LayoutCorona>
        //             <h1 style={{textAlign: 'center'}}>Loading data...</h1>
        //         </LayoutCorona>
        //     )
        // }

        return (
            <>
                <CoronaProvider>
                  <LayoutCorona>
                      {/* <h1 style= {{textAlign: 'center'}}>Virus Corona</h1> */}
                      <GlobalCorona
                          // error={this.state.error}
                          // data={this.state.virus}
                      />
                      <CountriesCorona
                          // error={this.state.error}
                          // data={this.state.virus}
                      />
                  </LayoutCorona>
                </CoronaProvider>
            </>
        )
    }
}

export default App