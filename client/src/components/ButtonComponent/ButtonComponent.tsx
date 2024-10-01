import './button.css'

const ButtonComponent = ({text}:{text: string}) => {
  return (
    <div id="button-main-container">
      <div className="button-line">
         <button className="button">
        {text}
      </button>
      </div>
     
    </div>
  );
};

export default ButtonComponent;