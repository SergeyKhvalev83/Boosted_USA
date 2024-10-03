import { Routes, Route } from "react-router-dom";
import "./App.css";
import LayoutComponent from "./components/LayoutComponent/LayoutComponent";
import WelcomeComponent from "./components/WelcomeComponent/WelcomeComponent";
import BrandsComponent from "./components/BrandComponent/BrandsComponent";

function App() {
  return (
    <>
   <LayoutComponent />
   <WelcomeComponent />
    <BrandsComponent />
   
    </>
  );
}

export default App;


  // <Routes>
    //   <Route path="/" element={<LayoutComponent />}>
    //     <Route path="/" element={<WelcomeComponent />} />
    //     <Route path="/" element={<BrandComponent />} />
    //   </Route>
    // </Routes>