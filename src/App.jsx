// import './App.css'



// This will have routing


// Importing the rounting libs and modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet, BrowserRouter } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import AccountSetting from './pages/AccountSetting';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
// import { Router, Route, Link, useNavigate, Outlet } from 'react-router';


function App() {

  return (

    <Router>
      <Routes>
        <Route element={<Layout />}>   {/* */}

          <Route path='/' element={<Home />}></Route>    {/* */}
          <Route path='/contact' element={<ContactUs />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/prodlist' element={<ProductListing />}></Route>
          <Route path='/proddetail' element={<ProductDetail />}></Route>
          <Route path='/cart' element={<ShoppingCart />}></Route>
          <Route path='/accsetting' element={<AccountSetting />}></Route>
        </Route>

      </Routes>
    </Router>
  );
};

export default App;




