import React from "react"
import { NavLink } from "react-router-dom";
import styles from './HomePage.module.css';
import Navbar from "../components/Navbar";
function HomePage() {
  return (
    <div className={styles.homepage}>
      <Navbar />
      <section> 
        <h1>You travel the world. travelwise keeps the track of your adventures.</h1>
        <h2>A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.</h2>
        <NavLink className="cta" to="/login">Start tracking now</NavLink>
      </section>
    </div>
  )
};

export default HomePage;
