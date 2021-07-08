import React from 'react'
import ButtonCounter from './components/counter/button'
import ResultCounter from './components/counter/result'
import WelCome from './components/counter/welcome';
import GoodbyeComponent from './components/counter/goodbye'

class Counter extends React.Component {
    constructor(props) {
        // state là property trong class js
        // sử dụng lại được các props của React components
        super(props);
        this.state = {
            count: 0
        }
        // this.state = {
        //     count:this.state.count + val
        // }
    }

    // viết hàm để cập nhật thay đổi state count
    incrementCounter = (val) => {
        // val là dữ liệu cũ của state count
        // this.setState nó sẽ merge 2 object lại với nhau
        // obj cũ ban đầu tạo ra từ contructor
        // với obj truyền vào trong hàm setState
        // mà key của obj trùng nhau thì nó sẽ loại bỏ đi cái obj ban đầu và thay thế obj mới
        this.setState({count:this.state.count + val}) 
    }
    decrementCounter = (val) => {
        this.setState({count:this.state.count - val}) 
    }
    // khi state thay đổi sẽ kéo theo việc render lại giao diện
    // render là phương thức có sẵn của reactjs
    render() {
        return (
        <>
            <WelCome/>
            <ResultCounter count = {this.state.count}/>
            <ButtonCounter 
                type="button"  
                name="increment"
                click={this.incrementCounter}
                val={this.state.count}
            >+</ButtonCounter>
            <ButtonCounter 
                type="button" 
                name="decrement"
                click={this.decrementCounter}
                val={this.state.count}
            >-</ButtonCounter>
            <GoodbyeComponent/>
        </>
        )
    }
}

export default Counter;