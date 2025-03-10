// // import './App.css'



// // This will have routing


// // Importing the rounting libs and modules
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Switch, Link, useNavigate, Outlet, BrowserRouter } from 'react-router';
// import Layout from './components/Layout';
// import Home from './Home';
// import AccountSetting from './pages/AccountSetting';
// import ContactUs from './pages/ContactUs';
// import Login from './pages/Login';
// import Logout from './pages/Logout';
// import ProductDetail from './pages/ProductDetail';
// import ProductListing from './pages/ProductListing';
// import ShoppingCart from './pages/ShoppingCart';
// // import { Router, Route, Link, useNavigate, Outlet } from 'react-router';


// function App() {

//   return (

//     <Router>
//       <Routes>
//         {/* <Route element={<Layout />}>    */}

//         <Route path='/' element={<Home />}></Route>    {/* */}
//         <Route path='/contact' element={<ContactUs />}></Route>
//         <Route path='/login' element={<Login />}></Route>
//         <Route path='/logout' element={<Logout />}></Route>
//         <Route path='/prodlist' element={<ProductListing />}></Route>
//         <Route path='/proddetail' element={<ProductDetail />}></Route>
//         <Route path='/cart' element={<ShoppingCart />}></Route>
//         <Route path='/accsetting' element={<AccountSetting />}></Route>

//         {/* </Route> */}

//       </Routes>

//     </Router>
//   );
// };

// export default App;




// Importing React and React Router
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router'; // Correct import
import Layout from './components/Layout';
import Home from './pages/Home';
import AccountSetting from './pages/AccountSetting';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Logout from './pages/Logout';
import ProductDetail from './pages/ProductDetail';
import ProductListing from './pages/ProductListing';
import ShoppingCart from './pages/ShoppingCart';
import AccountRegestration from './pages/AccountRegestration';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for your React components */}
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/prodlist' element={<ProductListing />} />
        <Route path='/proddetail' element={<ProductDetail />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path='/accsetting' element={<AccountSetting />} />
        <Route path='/accregestration' element={<AccountRegestration />} />
      </Routes>
    </Router>
  );
}

export default App;
