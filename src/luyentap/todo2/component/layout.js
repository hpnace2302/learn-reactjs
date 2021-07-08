
import '../style/layout.css'
import PropTypes from 'prop-types';
const LayoutTodo = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

LayoutTodo.propTypes = {
    children: PropTypes.array,
}
export default LayoutTodo;