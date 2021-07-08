import React from 'react'

class WelComeComponent extends React.PureComponent {
    // PureComponent : check đc liệu có cần render lại giao diện k ? và tự động gọi souldComponentupdate trong class component ra xử lý
    render() {
        console.log(`conponents WelComeComponent đã được render`)
        return (
            <>
                <h1>welcome you!</h1>
            </>
        )
    }
}

export default WelComeComponent