
import PropTypes from 'prop-types';
import './Card.css';
const Card = ({ title, image, description, buttonText, onButtonClick, className, style }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {image && <img src={image} alt={title} className="card-img-top" />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {buttonText && (
          <button onClick={onButtonClick} className="btn btn-primary">
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

Card.defaltProps = {
  title: "Card Title",
  image: "",
  description: "Card description goes here.",
  buttonText: "",
  onButtonClick: () => {},
  className: "",
  style: {},
};
// PropTypes for type safety
Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
  };

export default Card;
