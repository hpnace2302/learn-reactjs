import '../style/layout.css'
import PropTypes from 'prop-types'

const LayoutTodo = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    )
}

LayoutTodo.propTypes = {
    children: PropTypes.node, // Các thành phần con của component
    // PropTypes.children : bên trong chỉ có 1 thành phần component
}

export default LayoutTodo