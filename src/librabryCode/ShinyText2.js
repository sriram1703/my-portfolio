import './ShineText.css';

const ShinyText2 = ({ text, disabled = false, speed = 5, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`shiny-text ${disabled ? 'disabled' : ''} ${className}`}
      style={{ animationDuration,fontSize:'40px',marginTop:'18px' }}
    >
      {text}
    </div>

  );
};

export default ShinyText2;


