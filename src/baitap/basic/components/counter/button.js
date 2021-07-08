import React from 'react'

class ButtonCounter extends React.Component {
    render() {
        return (
            <>
                <button
                    type = {this.props.type}
                    name = {this.props.name}
                    onClick = {() => this.props.click(1)}
                >{this.props.children}</button>
            </>
        )
    }
}

export default ButtonCounter;