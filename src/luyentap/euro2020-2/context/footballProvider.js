// đây là nơi share dữ liệu cho các component
import React from 'react'
import {api} from '../service/api'
import {helper} from '../helper/common'
import MyContext from './index'

class FootballProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      football: {} // dữ liệu hiển thị
    }
  }

  setStateSync = (state) => {
    return new Promise (solve => {
      this.setState(state, solve)
    })
  }

  async componentDidMount() {
    await this.setStateSync({...this.state, loading: true})
    const data = await api.getDataEuro2020()
    if (!helper.isEmptyObject(data)) {
      await this.setStateSync({...this.state, football: data})
    }
    await this.setStateSync({...this.state, loading: false})
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default FootballProvider

// import React from 'react';
// import { api } from '../service/api';
// import { helper } from '../helper/common';
// import MyContext from './index';

// class FootballProvider extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loading: false,
//       football: {} // du lieu hien thi
//     }
//   }

//   // this.setState : ham xu ly bat dong bo
//   // custom ham this.setState thanh xu ly dong bo
//   setStateSync = (state) => {
//     return new Promise( solve => {
//       this.setState(state, solve);
//     })
//   }

//   async componentDidMount() {
//     await this.setStateSync({...this.state, loading: true});
//     const data = await api.getDataEuro2020();
//     if(!helper.isEmptyObject(data)){
//       await this.setStateSync({...this.state, football: data})
//     }
//     await this.setStateSync({...this.state, loading: false});
//   }

//   render() {
//     return (
//       <MyContext.Provider value={this.state}>
//         {this.props.children}
//       </MyContext.Provider>
//     )
//   }
// }
// export default FootballProvider;
