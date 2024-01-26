import React from "react"
import { NavLink } from "react-router-dom";
import styles from './AppNavBar.module.css';
function AppNavBar() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="cities">Cities</NavLink>
            </li>
            <li>
                <NavLink to="countries">Countries</NavLink>
            </li>
        </ul>
    </nav>
  )
};

export default AppNavBar;
