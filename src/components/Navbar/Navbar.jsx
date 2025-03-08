import React from "react";
import { Link } from "react-router";
import styles from './Navbar.module.css';



const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Car Shop</div>
            <ul className={styles.navLinks}>
                <li><Link to="/">Home</Link></li>


                <li><Link to="/contact">About Us</Link></li>


                <li><Link to="/logout">Logout</Link></li>


                <li><Link to="/prodlist">Product Listings</Link></li>


                <li><Link to="/cart">My Cart</Link></li>


                <li> <Link to="/accsetting">My Account</Link></li>

            </ul>

        </nav>
    );
};

export default Navbar;