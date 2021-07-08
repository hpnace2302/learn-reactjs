import React from 'react'
import {api} from './services/api'
// import { helper} from './helpers/common'
import UserComponent from './components/user'
import LayoutUser from './components/layout'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataUsers: {}, 
            error: {},
        }
    }
    async componentDidMount() {
        this.setState({...this.state})
        const data = await api.getDataUser()
        this.setState({
            ...this.state,
            error: {},
            dataUsers: data
        })
        // if (!helper.isEmptyObject(data)) {
        // } else {
        //     this.setState({
        //         ...this.state,
        //         error: {cod: 404 , mess: 'Not found data'},
        //         dataUsers: {}
        //     })
        // }
        // this.setState({...this.state})
    }
    render() {
        console.log(this.state.dataUsers)
        return (
            <>
                <LayoutUser>
                    <h1 style= {{textAlign: 'center'}}>Data User</h1>
                    <UserComponent
                        data = {this.state.dataUsers}
                        error = {this.state.error}
                    />
                    
                </LayoutUser>
            </>
        )
    }
}

export default App;