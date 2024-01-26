import React from "react"
import styles from './Message.module.css';
function Message({ message }) {
  return (
    <p className={styles.message}>
      <span>
        {message}
      </span>
    </p>
  )
};

export default Message;
