
import PropTypes from 'prop-types'
import {FaTimes, FaBars} from 'react-icons/fa'

const Button = ({ color, text, textColor, onClick }) => {
    return <button onClick={onClick} style={{ backgroundColor: color, color: textColor }} className='btn'>{text}</button>
} 

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
