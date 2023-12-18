import React, { useEffect, useState } from "react"
import Button from "../components/Button";
import styles from './Login.module.css';
import Navbar from '../components/Navbar';
import { useAuth } from "../contexts/AuthContexts";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login, isAuthenticated} = useAuth();
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    if(!email && !password){
      return;
    }
    
    login(email , password);
  }

  useEffect(() => {
    if(isAuthenticated){
      navigate("/app");
    }
  } , [isAuthenticated])
  return (
    <main className={styles.login}>
      <Navbar />
      <form className={styles.form} onSubmit={handleLogin}>
        <div className={styles.row}> 
          <label>Email Address</label>
          <input placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
        </div>
        <div className={styles.row}>
          <label>Password</label>
          <input placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="email" />
        </div>
        <div className={styles.row}> 
          <Button type={"primary"}>Login</Button>
        </div>
      </form>
    </main>
  )
};

export default Login;

