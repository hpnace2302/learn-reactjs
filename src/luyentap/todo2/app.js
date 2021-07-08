import React from 'react'
// import ReactDOM from 'react-dom'
import Header from './component/header'
import ListTodo from './component/list-item-todo'
import LayoutTodo from './component/layout'
import BtnAddTodo from './component/btn-add-todo'
import InputTodo from './component/input-todo'
// import PropTypes from 'prop-types';

class App3 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            id: 1,
            todo: [],
        }
    }
    // Lưu được value ng dùng nhập vào ô input vào trong state
    getNameTodo = (e) => {
        // e là sự kiện tương tác của ng dùng với thành phần components input
        // Từ e : lấy ra value nằm trong thành phần input
        let nameTodo = e.target.value
        // console.log(nameTodo)
        // cập nhật nameTodo vào state
        if (nameTodo.length > 0 && nameTodo !== '') {
            // Kiểm tra nameTodo k phải chuổi rỗng hoặc chuôi dấu cách 
            this.setState({name: nameTodo})
        }
    }
    // Xử lý việc ng dùng bấm btn Add
    handleAddTodo = () => {
        // Kiểm tra state name todo có dữ liêu k ?
        if (this.state.name !== '') {
            // cập nhật id công việc : mỗi lần tăng id cv lên để id k trùng nhau
            // Hàm this.setState nhận vào là 1 obj hoặc 1 func
            this.setState(state => ({id: state.id + 1}))
            const newTodo = {
                nameWork: this.state.name,
                idWork: this.state.id,
                done: false,
            }
            // cập nhật state
            this.setState(state => ({todo: [...state.todo, newTodo], // đổ thêm cv mới vào mảng cv đã tồn tại
            name: '' // xoá cv vừa nhập
        }))
        }
    }
    // Xử lý xoá item trong list
    removeItemTodo = (id) => {
        // id để biết được cần xoá cv nào trong danh sách
        const newListItems = this.state.todo.filter(item => item.idWork !== id)
        this.setState({todo: newListItems})
    }
    // Xử lý hoàn thành công việc
    finishItemTodo = (id) => {
        // cần update key 'done' từ true <=> false trong obj item của mảng state todo theo đúng id truyên lên
        const upTodo = this.state.todo.map(item => item.idWork === id ? {...item, done: !item.done} : item)
        this.setState({todo: upTodo})
    }
    render() {
        console.log(this.state.todo)
        return (
            <>
                <LayoutTodo>
                    <Header/>
                    <InputTodo
                        change={this.getNameTodo}
                        value={this.state.name}
                    />
                    <BtnAddTodo
                        click={this.handleAddTodo}
                    >Add</BtnAddTodo>
                    <ListTodo
                        list={this.state.todo}
                        delete={this.removeItemTodo}
                        finish={this.finishItemTodo}
                    />
                </LayoutTodo>
            </>
        )
    }
}

export default App3;