import React from 'react'

class ResultCounter extends React.Component {
    /* this.props để lấy được toàn bộ các props */
    render() {
        return(
            <>
                <h1>{this.props.count}</h1>
            </>
        )
    }
}

export default ResultCounter;