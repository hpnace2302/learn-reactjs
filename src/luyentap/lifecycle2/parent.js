import React from 'react'
import ChildComponent from './child'

class ParentComponent extends React.Component {
    // Giai đoạn mounting : component được tạo ra
    constructor(props) {
        // Phương thức sẽ chạy đầu tiên trong class
            super(props) // sử dụng lại toàn bộ props của React.component
            // vì extends React.Component : được sử dụng luôn this.props
            // đây sẽ là chỗ để mình khai báo state
            this.state = {
                count: 0,
                color: 'black',
                show: true // quy định child component có hiển thị k ?
            }
        console.log(`constructor của ParentComponent đã chạy`)
    }
    static getDerivedStateFromProps(props, state) {
        // hàm này chạy sau constructor
        // chạy trước hàm render
        // Mục đích : cập nhật lại state theo sự biến đổi của props truyền vào cho component đấy
        console.log(`getDerivedStateFromProps of ParentComponent`)
        console.log('props getDerivedStateFromProps of ParentComponent: ',props)
        console.log('state getDerivedStateFromProps of ParentComponent: ',state)
        // Nếu muốn cập nhật lại state thì gọi this.setState return về 1 obj
        // return null sẽ k update gì cả
        return null
    }
    componentDidMount() {
        // sau khi giao diện đã được hiển thị thì componentDidMount sẽ chạy
        // thông thường đây sẽ call api từ server data backend để lấy data về
        // nó chỉ chạy duy nhất 1 lần trong mounting
        console.log(`componentDidMount of ParentComponent đã chạy`)
    }
    shouldComponentUpdate(nextProps,nextState) {
        // chạy khi mà cập nhật state hay props của component
        // chỉ chạy ở giai đoạn updating
        // hàm này sẽ quyết định có render lại giao diện hay k ? (chạy lại hàm render hay k ?)
        // nếu return true thì sẽ render lại 
        // nếu return false thì k render lại (k cập nhật lại giao diện)
        console.log('nextProps shouldComponentUpdate', nextProps)
        console.log('nextState shouldComponentUpdate', nextState)
        // nếu k gọi hàm này mà sử dụng react.component thì mặc định luôn luôn render lại (mặc định return true)
        return true;
        // thông thường so sánh nextProps !== nextState thì sẽ cập nhật lại
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // hàm này chỉ chạy khi state hay props của component được cập nhật
        // chỉ chạy ở giai đoạn updating
        // nó sẽ chạy sau hàm render - trước khi giao diện được hiển thị
        // hàm này sẽ là nơi bổ trợ kết quả cần tính toán cho componentDidUpdate
        console.log('prevProps getSnapshotBeforeUpdate', prevProps)
        console.log('prevState getSnapshotBeforeUpdate', prevState)
        return 'yellow' // 10 dẽ được componentDidUpdate nhận
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // Phương thức chạy cuối cùng trong giai đoạn updating
        // Sau khi giao diện được cập nhật mình muốn làm gì đó để xử lý lại giao diện lần cuối
        document.getElementById('title').style.color = snapshot;
        // trong này k cập nhật lại state props được nữa
    }
    changeCounter = () => {
        this.setState(state => ({count: state.count + 1, color: 'blue'}))
    }
    hideChildComponent = () => {
        this.setState({show: !this.state.show})
    }
    // Hiển thị component
    render() {
        console.log(`render of ParentComponent on mounting đã chạy`)
        return (
            <>
                <h1 id="title" style={{color: this.state.color}}>This is component Parent - counter : {this.state.count}</h1>
                <button onClick={this.changeCounter}>Change counter</button>
                {this.state.show && <ChildComponent/>} 
                {/* điều kiện hiển thị ChildComponent */}
                <button onClick={this.hideChildComponent}>Remove ChildComponent</button>
            </>
        )
    }
}

export default ParentComponent;