// đây là nơi share data cho các component

import React from 'react';
import {api} from '../service/api'
import { helper} from '../helpers/common'
import MyContext from './index';

class FootballProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            football: {} // dữ liệu hiển thị
        }
    }

    setStateAsync = (state) => {
      return new Promise (solve => {
          this.setState(state, solve);
      })
    }

    async componentDidMount() {
        await this.setStateAsync({...this.state, loading: true})
        const data = await api.getDataEuro2020()
        if (!helper.isEmptyObject(data)) {
            await this.setStateAsync({...this.state, football: data})
        }
        await this.setStateAsync({...this.state,loading: false})
    }

    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default FootballProvider;