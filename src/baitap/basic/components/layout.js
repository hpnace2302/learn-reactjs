import React from 'react'
import Header from './header'
import Sidebar from './sidebar'
import Footer from './footer'

class LayoutComponent extends React.Component {
    render() {
        return (
            <>
                <Header
                    // title='home-page' là props
                    title='home-page'
                />
                {this.props.children}
                {/* là nhứng thành phần nằm trong LayoutComponent : ví dụ :
                <LayoutComponent>
                <h3>adfjdsif</h3>
                <h1>Hello World</h1>
                </LayoutComponent>
                 */}
                <Sidebar
                    // name='dang phong' là props
                    name='dang phong'
                />
                <Footer/>
            </>
        )
    }
}

export default LayoutComponent;