// import React from 'react';

// const Footer = () => {
//     return <footer><p>&copy; 2025 Himanshu V, Andrea M.</p></footer>
// };

// export default Footer;



import React from "react";
import styles from "./Footer.module.css"; // Import the CSS Module
import { useNavigate } from "react-router";

const Footer = () => {

    const navigate = useNavigate();
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; {new Date().getFullYear()} CarShop. Himanshu V, Andrea M.</p>
                <ul className={styles.footerLinks}>
                    <li><button onClick={() => navigate('/contact')}>Contact Us</button></li>
                    <li><button onClick={() => navigate('/contact')}>Get Help</button></li>
                    {/* <li><a href="#">Terms of Service</a></li> */}
                    {/* <li><a href="/contact">Contact Us</a></li> */}
                </ul>

            </div>
        </footer>
    );
};

export default Footer;
