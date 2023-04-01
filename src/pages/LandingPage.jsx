import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to FlowShift</h1>
      <div className={styles.buttonsGroup}>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Signup</Link>
      </div>
    </div>
  );
};

export default LandingPage;
