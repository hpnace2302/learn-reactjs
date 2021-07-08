import PropTypes from 'prop-types';
const InputTodo = (props) => {
    return (
        <input 
        type={props.type}
        name={props.name}
        onChange={props.change}
        value={props.value}
        ></input>
    )
}

InputTodo.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    change: PropTypes.func.isRequired,
    value: PropTypes.string,
}

export default InputTodo;