import React from 'react'
import LayoutComponent from './components/layout'
// import HeaderLayout from './components/header'
// import FooterLayout from './components/footer'
// import SidebarLayout from './components/sidebar'

// class component
class HelloWorld extends React.Component {

    // Hiển thị
    render() {
        return (
            <>
            {/* <HeaderLayout
                title='home-page'
            /> */}
            <LayoutComponent>
            {/* h1 là mã jsx */}
            <h1>Hello World</h1>
            </LayoutComponent>
            {/* <SidebarLayout name='dang phong'/>
            <FooterLayout/> */}
            </>
        )
    }
}

// Sử dụng cho những nơi khác
export default HelloWorld;