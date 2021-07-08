import React from 'react'

class SidebarComponent extends React.Component {
    render () {
        return (
            <>
            {/* sử dụng props trong class component */}
                <h2>This is {this.props.name}</h2>
            </>
        )
    }
}

export default SidebarComponent;