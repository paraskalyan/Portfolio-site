// import './App.css'
import './mobileFirst.css'
import Home from './components/Home';
import About from './components/About';
import Products from './components/Projects';
import Menu from './components/Menu';

import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Menu />
      <Routes>  
        <Route path="/" element={<Home/> } /> 
        <Route path="/about" element={<About/> } /> 
        <Route path="/products" element={<Products/> } /> 
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
