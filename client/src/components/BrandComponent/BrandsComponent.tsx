import './brands.css';
import WiredBrandComponent from './WiredBrandComponent/WiredBrandComponent';
import PopMechanicsComponent from './PopMechanicsComponent/PopMechanicsComponent';
import ElectrekComponent from './ElectrekComponent/ElectrekComponent';
import TechChurchComponent from './TechChurchComponent/TechChurchComponent';

const BrandsComponent = () => {
  return (
    
      <div className="brand-main-container center">
        <div className="brands-logo-container">
          <ElectrekComponent/>
          <TechChurchComponent/>
          <PopMechanicsComponent/>
          <WiredBrandComponent/>
        </div>
      </div>
    
  );
};

export default BrandsComponent;
