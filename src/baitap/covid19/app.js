import React from 'react'
import LayoutCorona from './components/Layout-v2'
import GlobalCorona from './components/Global-v2'
import CountriesCorona from './components/Countries-v2'
// import './components/style.css'
// import {api} from './services/api'
// import {helper} from './helpers/common'
import CoronaProvider from './context/CovidProvider-v2'

class AppCorona extends React.PureComponent {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         loading: false, // tạo hiệu ứng loading call data - báo ng dùng chờ
    //         virus: { // state lưu thông tin data từ api

    //         },
    //         error: {} // thông báo lỗi
    //     }
    // }
    // async componentDidMount() {
    //     // setState loading : true
    //     // immutable state : so sánh state mới với state cũ nếu khác nhau thì thay đổi ...this.state : bên dưới thay đổi loading false => true
    //     this.setState({...this.state, loading: true})
    //     const data = await api.getDataVirusCorona() // lấy dữ liệu api từ getDataVirusCoronat gán bằng data
    //     // Kiểm tra xem obj data có rỗng k ? 
    //     if (!helper.isEmptyObject(data)) {
    //         // thực sự api có trả về dữ liệu
    //         this.setState({
    //             ...this.state, 
    //             error: {},
    //             virus: data // gán virus = data lấy được từ api
    //         })
    //     } else {
    //         // api k có dữ liệu trả về
    //         this.setState({
    //             // obj rỗng trả về toàn bộ state , báo lỗi 
    //             ...this.state, 
    //             error: {cod : 404, mess: 'Not found data'}, 
    //             virus: {}
    //         })
    //     }
    //     // mọi việc đã xử lý xong
    //     this.setState({...this.state, loading: false}) // lấy dữ liệu xong gán loading lại bằng false , hiển thị bảng dữ liệu
        
    // }
    render() {
        // console.log(this.state.virus, this.state.loading)

        // if (this.state.loading) {
        //     return (
        //         <LayoutCorona>
        //             <h1 style={{textAlign: 'center'}}>Loading data...</h1>
        //         </LayoutCorona>
        //     )
        // }
        return (
          <CoronaProvider>
            <LayoutCorona>
                <h1 style={{textAlign: 'center'}}>Virus Corona</h1>
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
        )
    }
}

export default AppCorona