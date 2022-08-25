import PropTypes from 'prop-types';

const Button = ({ text, color, btnClick }) => {
  return (
    <button onClick={ btnClick } className="btn" style={{ background: color }}>{ text }</button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  btnClicked: PropTypes.func,
}

export default Button