import { Routes, Route } from 'react-router-dom';
import './App.css'
import LayoutComponent from './components/LayoutComponent/LayoutComponent';
import WelcomeComponent from './components/WelcomeComponent/WelcomeComponent';

function App() {

  return (
    <Routes>    
        <Route path="/" element={<LayoutComponent/>}>
            <Route path="/" element={<WelcomeComponent/>}/>


        </Route>
    </Routes>
  )
}

export default App
