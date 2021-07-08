import React from 'react'

// Định nghĩa function components

const HeaderComponent = (props) => {
    // props là object chứa tất cả các props từ nơi khác truyền vào
    // Hiển thị
    return (
        <React.Fragment>
            {/* warper components */}
            <h1>This is header - {props.title}</h1>
            <p>this is content header</p>
        </React.Fragment>
    )
}

export default HeaderComponent;