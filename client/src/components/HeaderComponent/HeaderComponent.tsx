import LogoComponent from "../LogoComponent/LogoComponent";
import NavigationBarComponent from "../NavigationBarComponent/NavigationBarComponent";
import TopComponent from "../TopComponent/TopComponent";
import "./header.css";

const HeaderComponent = () => {
  return (
    <div>
      <TopComponent />
      <div className="center header-main-frame">
        <LogoComponent/>
        <NavigationBarComponent />
        <img src="acc_cart.jpg" alt="accaunt-cart" />
      </div>
    </div>
  );
};

export default HeaderComponent;
