import React from "react"
import styles from './Product.module.css';
import Navbar from '../components/Navbar';

function Pricing() {
  return (
    <div className={styles.product}>
      <Navbar />
      <section>
        <div>
        <h2>Simple pricing.
          <br />
          Just $9/month
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium qui reprehenderit magni a recusandae repellat placeat eveniet sed illum ipsa suscipit eaque quibusdam magnam tempora tempore sequi consequatur quia, debitis nam. Adipisci dignissimos praesentium ratione assumenda eos voluptate magnam recusandae excepturi voluptas velit illum quae, quod suscipit, enim placeat aliquid.
        </p>
        </div>
        <img src="https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true" />
      </section>
    </div>
  )
};

export default Pricing;
