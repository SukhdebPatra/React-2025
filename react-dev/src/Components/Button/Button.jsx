import PropTypes from "prop-types";
import './Button.css'; 

const Button = ({ label, onClick, className, style, disabled }) => {
  return (
    <button
      className={`btn ${className}`}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
// Default props
Button.defaultProps = {
  label: "Click Me",
  className: "",
  style: {},
  disabled: false,
  onClick: () => {},
};

// PropTypes for type safety
Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
};

export default Button;
