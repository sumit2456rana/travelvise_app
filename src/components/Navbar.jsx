import React from "react"
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
function Navbar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">Home</NavLink>
            <ul>
                <li>
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={styles.ctaLink}>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;
