// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css'
import Home from './component/Home';
import Products from './component/Products'
// import { Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import Product from './component/Product';
import Cart from './component/Cart';
// import Login from './Accunts/Login';
// import Registery from './Accunts/Registery';
import Footer from './components/Footer';
// import { LoginForm } from './Accunts/LoginForm';
import { AccountBox } from './accountBox/index';

function App() {
  return (
   <>
   <Router>
          <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Products" element={<Products />} />
          <Route  path="/products/:id" element={<Product />} />
          <Route  path="/Cart" element={<Cart />} />
          <Route  path="/account" element={<AccountBox />} />
        </Routes>
        <Footer/>
        </Router>
   </>
  );
}

export default App;
