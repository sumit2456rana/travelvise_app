import React from "react"
import Navbar from '../components/Navbar';
import styles from './Product.module.css';
function Product() {
  return (
    <div className={styles.product}>
      <Navbar />
      <section>
        <img src="https://www.tataaig.com/s3/senior-citizens-travel-insurance_cd09659466.jpeg" />
        <div>
          <h2>About Worldwide.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, sed? Molestias, sit perspiciatis debitis ut, expedita velit sunt hic, optio aut deserunt dignissimos eos officiis! Totam velit facere molestias numquam sit assumenda inventore saepe magni rerum perspiciatis consequuntur harum aspernatur a aliquid dignissimos accusantium rem officiis ipsa eaque, placeat fuga?</p>
        </div>
      </section>
    </div>
  )
};

export default Product;
