import { useState } from 'react'
import './App.css'


// Importing the rounting libs and modules
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Outlet } from 'react-router';

// import { Router, Route, Link, useNavigate, Outlet } from 'react-router';



// Home page
const Home = () => {
  const navigate = useNavigate();   //it is a hook, think of it as a routers that we can use to route it to different routes
  return ( //returns the html as component
    <div>
      <h2>Home Page</h2>
      <button onClick={() => navigate('/contact')}>About Us</button>
    </div>
  );
};


// About Page
const About = () => (
  <div>
    <h2>About Page</h2>
    <nav>
      <ul>
        <li><Link to='login'>Login</Link></li>
        {/* <li to=''>Andrea M.</li> */}
      </ul>
    </nav>
    <Outlet />
  </div>
);

const Nav = () => (



  <Router>
    <nav>


      <Link to="/">Home</Link>


      <Link to="/contact">About Us</Link>


      <Link to="/logout">Logout</Link>


      <Link to="/prodlist">Product Listings</Link>


      <Link to="/cart">My Cart</Link>


      <Link to="/accsetting">My Account</Link>


    </nav>

    <Routes>
      <Route path='/' element={<Home />}></Route>    {/* */}
      <Route path='/contact' element={<About />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
      <Route path='/prodlist' element={<ProductListing />}></Route>
      <Route path='/proddetail' element={<ProductDetail />}></Route>
      <Route path='/cart' element={<ShoppingCart />}></Route>
      <Route path='/accsetting' element={<AccountSetting />}></Route>


    </Routes>
  </Router>

)

const Login = () => <h2>Login Page</h2>
const Logout = () => <h2>Login Page</h2>
const ProductListing = () => <h2>Product Listing Page</h2>
const ProductDetail = () => <h2>ProductDetail Page</h2>
const ShoppingCart = () => <h2>ShoppingCart Page</h2>
const AccountSetting = () => <h2>AccountSetting Page</h2>

function App() {
  // const [count, setCount] = useState(0)



  return (
    <Nav />
  )
}

export default App




// // src/App.js

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useNavigate,
//   Outlet,
// } from "react-router";


// // Home Page Component
// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <button onClick={() =>
//         navigate("/contact")}>Go to Contact</button>
//     </div>
//   );
// };

// // About Page Component 
// const About = () => (
//   <div>
//     <h2>About Page</h2>
//     <nav>
//       <ul>
//         <li>
//           <Link to="team">Our Team</Link>
//         </li>
//         <li>
//           <Link to="company">Our Company</Link>
//         </li>
//       </ul>
//     </nav>
//     <Outlet />
//   </div>
// );

// // Components for other pages
// const Contact = () => <h2>Contact Page</h2>;
// const Team = () => <h2>Team Page</h2>;
// const Company = () => <h2>Company Page</h2>;

// function App() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       {/*Implementing Routes for respective Path */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />}>
//           <Route path="team" element={<Team />} />
//           <Route path="company" element={<Company />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
