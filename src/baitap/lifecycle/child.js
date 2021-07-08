import React from 'react'

class ChildComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    
    componentWillUnmount() {
        // hàm này sẽ tự động chạy khi component bị xoá
        // trước khi component bị xoá mình có thể làm điều gì đó
        console.log('ChildComponent vừa bị xoá')
    }
    render() {
        return (
            <h1>This is child component</h1>
        )
    }
}

export default ChildComponent