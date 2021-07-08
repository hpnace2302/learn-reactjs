import React from 'react'

class ChildComponent extends React.Component {
    componentWillUnmount() {
        // hàm này sẽ tự động chạy khi component bị xoá
        // trước khi component bị xoá mình có thể làm điều gì đó
        console.log('ChildComponent bị xoá')
    }
    render() {
        return (
            <h1>This is ChildComponent</h1>
        )
    }
}

export default ChildComponent