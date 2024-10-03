import "./layout.css"
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import { Outlet } from 'react-router-dom';

const LayoutComponent = () => {
  return (
    <div>
    <HeaderComponent />
    {/* <Outlet /> */}
 </div>
  );
};

export default LayoutComponent;