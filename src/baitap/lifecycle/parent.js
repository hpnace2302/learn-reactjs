import React from 'react'
import ChildComponent from './child'

class ParentComponent extends React.Component {
    // 1-giai được mouting : component được tạo ra
    constructor(props) {
        // contructor là phương thưc chạy đầu tiên trong class
        super(props) // sử dụng lại toàn bộ props của React.Component
        // vì extends React.Component nên được sử dụng luôn this.props
        // đây sẽ là chỗ để khai báo state
        this.state = {count: 0,
            color: 'black',
            show: true // quy định childcomponent có được hiển thị k ( mặc định là true : có thể)
            };
        console.log(`contructor của ParentComponent đã chạy`)
    }
    static getDerivedStateFromProps(props, state) {
        // chạy sau constructor
        // chạy trước hàm render
        // mục đích : cập nhật lại state theo sự biến đổi của props truyền vào cho component đấy
        console.log(`getDerivedStateFromProps of ParentComponent on mounting`)
        console.log('props getDerivedStateFromProps of ParentComponent', props)
        console.log('props getDerivedStateFromProps of ParentComponent', state)
        // nếu muốn cập nhật lại state thì gọi this.setState return về 1 obj
        // return null nếu k muốn update gì cả
        return null
    }
    componentDidMount() {
        // sau khi giao diện đã hiển thị thì componentDidMount sẽ chạy
        // thông thường đây sẽ call api từ server backend về để lấy data
        // nó chỉ chạy duy nhất 1 lần trong mounting
        console.log(`componentDidMount of ParentComponent đã chạy`)
    }

    changeCounter = () => {
        this.setState(state => ({count : state.count + 1, color: 'blue'}))
    }
    hideChildComponent = () => {
        this.setState({show : !this.state.show})
    }
    shouldComponentUpdate(nextProps, nextState) { // tương tự       PureComponent
        // Nếu k gọi hàm này : mà sử dụng React.Component thì luôn luôn luôn return true;
        // chạy khi mà cập nhật state hay props của component
        // chỉ chạy ở giai đoạn updating
        // hàm sẽ quyết định việc có render lại giao diện hay k ? (chạy lại hàm render hay k ?)
        // nếu return true : sẽ chạy lại hàm render
        // nếu return false : sẽ k chạy lại hàm render (k cập nhật lại giao diện)
        console.log('nextProps shouldComponentUpdate' , nextProps)
        console.log('nextState shouldComponentUpdate' , nextState)
        // thông thường so sánh nextProps với nextState k bằng nhau thì sẽ cập nhật lại
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // hàm này chỉ chạy khi state hay props của component được cập nhật
        // chỉ chạy ở giai đoạn updating
        // nó sẽ chạy sau hàm render - trước khi giao diện được hiển thị
        // hàm này sẽ là nơi bổ trợ kết quả cần tính toán cho componentDidUpdate
        console.log('prevProps getSnapshotBeforeUpdate' , prevProps)
        console.log('prevState getSnapshotBeforeUpdate' , prevState)
        //return 10; // 10 dẽ được componentDidUpdate nhận
        return 'yellow'
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // Trong này k cập nhật lại state hay props được nữa
        // Phương thức chạy cuối cùng trong giao đoạn updating
        // sau khi giao diện được cập nhật mình muốn làm gì đó để xử lý lại giao diện lần cuối
        // text h1 liệu có còn màu blue k ? 
        document.getElementById('title').style.color = snapshot

    }
    // Hiển thị component
    render() {
        console.log(`render of ParentComponent on mounting running`)
        return (
            <>
                <h1 id='title' style= {{color: this.state.color}}>This is component parent counter : {this.state.count}</h1>
                <button onClick={() => this.changeCounter()}>change counter</button>
                {/* điều kiện hiển thị childcomponent */}
                { this.state.show && <ChildComponent/> }
                <button onClick={() => this.hideChildComponent()}>remove ChildComponent</button>
            </>
        )
    }
}

export default ParentComponent;