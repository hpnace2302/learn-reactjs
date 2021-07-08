import React from 'react'
import HeaderTodo from './components/header'
import LayoutTodo from './components/layout'
import ListTodo from './components/list-todo'
import InputTodo from './components/input-todo'
import ButtonAddTodo from './components/btn-add-todo'

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '', // tên công việc
            id: 1, // Mã công việc
            todo: [], // Mảng lưu công việc
        }
    }
    // Lưu đc value người dùng nhập vào ô input lưu vào state
    getNameTodo = (e) => {
        // e : sự kiện tương tác của người dùng với thành phần input
        // Từ e lấy ra giá trị data được nhập vào input
        let nameTodo = e.target.value;
        // console.log(nameTodo)
        // Kiểm tra value ng dùng nhập vào input
        if (nameTodo.length > 0 && nameTodo !== '') {
            // Cập nhật nameTodo vào trong state
            this.setState({name: nameTodo})
        }
    }
    // Xử lý việc ng dùng bấm vào Add btn
    handleAddTodo = () => {
        // Kiểm tra state name todo có dữ liệu k ?
        if (this.state.name !== '') {
            // cập nhật id công việc : mỗi lần tăng id công việc lên, để id k trùng nhau
            // hàm this.setState : nó nhận vào là 1 obj hoặc 1 func
            this.setState(state => ({id: state.id + 1}))
            const newTodo = {
                nameWork: this.state.name,
                idWork: this.state.id,
                done: false
            }
            this.setState(state => (
                {todo: [...state.todo, newTodo], // thêm công việc mới vào mảng công việc đã tồn tại
                name: '' // xoá công việc vừa nhập
            }))
        }
    }
    // Xử lý xoá item todo
    removeItemTodo = (id) => {
        // id để biết cần xoá công việc nào trong list todo
        const newListItems = this.state.todo.filter(item => item.idWork !== id)
        this.setState({todo: newListItems})
    }
    // finish item todo
    finishItemTodo = (id) => {
        // Cần update key done từ true <=> false trong obj item của mảng state todo theo đúng id truyền lên
        // không được phép làm mất hay thêm item công việc
        const upTodo = this.state.todo.map(item => item.idWork === id ? {...item, done: !item.done} : item)
        this.setState({todo: upTodo})
    }
    render() {
        // console.log(this.state.todo)
        return (
            <>
                <LayoutTodo>
                    <HeaderTodo/>
                    <InputTodo
                        change={this.getNameTodo}
                        val={this.state.name}
                        type="text"
                        name="add"
                    />
                    <ButtonAddTodo
                        click={this.handleAddTodo}
                    >Add</ButtonAddTodo>
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

export default TodoApp