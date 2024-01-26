import React from "react"
import { useAuth } from "../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
import styles from './User.module.css';
function User() {
  const {user, logout} = useAuth();
  const navigate = useNavigate();
  function handleClick() {
    logout();
    navigate("/");
  }
  return (
    <div className={styles.user}>
      <img src={user.avatar} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  )
};

export default User;
