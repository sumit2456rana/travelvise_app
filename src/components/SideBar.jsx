import React from "react"
import styles from './SideBar.module.css';
import { Outlet } from "react-router-dom";
import AppNavBar from "./AppNavBar";
function SideBar() {
  return (
    <div className={styles.sidebar}>
        <AppNavBar />

        <Outlet />

        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by travelwise Inc.
            </p>
        </footer>
    </div>
  )
};

export default SideBar;
