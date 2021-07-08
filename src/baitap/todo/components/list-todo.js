import PropTypes from 'prop-types'
const styleFinish = {
    color: 'red',
    textDecoration: 'line-through',
    fontWeight: 'bold'
}
const ListTodo = (props) => {
    return (
        <ul>
            {props.list.map((item,_) => (
                <li key={item.idWork}
                >
                    <input type="checkbox"
                        onClick={() => props.finish(item.idWork)}
                    />
                    <span
                        // thêm style vào thẻ khi đk đúng
                        style={item.done ? styleFinish : null}
                    >
                        {item.nameWork}
                    </span>
                    <span 
                        style= {{marginLeft:'20px',
                        color:'red',
                        cursor:"pointer"}}
                        onClick={() => props.delete(item.idWork)}
                    >[X]</span>
                </li>
            ))}
        </ul>
    )
}
ListTodo.propTypes = {
    list: PropTypes.array.isRequired,
    delete: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired,
}

export default ListTodo