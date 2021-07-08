import React from 'react'
import PropTypes from 'prop-types'

const LayoutUser = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    )
}

LayoutUser.propTypes = {
    children: PropTypes.node.isRequired
}
export default React.memo(LayoutUser)