import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppContext } from './AppContext';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import ProductList from './Components/ProductList/ProductList';
import Cart from './Components/Cart/Cart';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Footer from './Components/Footer/Footer';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import './App.css'
import Product from './Pages/Product';
import About from './Pages/About/About';
import Contact from './Components/Contact/Contact';

const App = () => {
  const { user } = useContext(AppContext);

  return (
    <Router>
      
          <Navbar />
          <ToastContainer className="toastpart"/>
      {!user ? (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/product' element={<Product />}>
              <Route path=':productId' element={<Product />} />
            </Route>
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
      <Footer />
    </Router>
  );
};

export default App;
