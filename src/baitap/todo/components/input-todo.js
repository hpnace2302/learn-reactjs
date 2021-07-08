// Quy định giá trị truyền vào cho props
import PropTypes from 'prop-types'


const InputTodo = (props) => {
    return (
        <input 
        type={props.type}
        name={props.name}
        onChange={props.change}
        value={props.val}
        ></input>
    )
}

// KIểm tra định dạng giá trị truyền vào props
InputTodo.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    val: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
}

export default InputTodo;