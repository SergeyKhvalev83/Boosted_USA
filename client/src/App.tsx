import { Routes, Route } from 'react-router-dom';
import './App.css'
import LayoutComponent from './components/LayoutComponent/LayoutComponent';

function App() {

  return (
    <Routes>    
        <Route path="/" element={<LayoutComponent/>}>
        </Route>
    </Routes>
  )
}

export default App
