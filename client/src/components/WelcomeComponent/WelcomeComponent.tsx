import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './welcome.css'

const WelcomeComponent = () => {
  return (
    <div className="welcome-main-container center">
      <div className="welcome-banner">
        <div className="welcome-text">
          Welcome to Boosted USA 
        </div>
       <br/>
        <div className="intro-text">
          The Holy Grail of Electric Skateboards and One REVolutionary Scooter
        </div>
        <div className='welcome-banner-buttons'>
          <div>
            <ButtonComponent text={'BOOST REVS'}/>
          </div>
          <div><ButtonComponent text={'BOOSTED BOARDS'}/>

          </div>

        </div>
        
      </div>

      
    </div>
  );
};

export default WelcomeComponent;