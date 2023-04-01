import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        required
        placeholder="Email address"
      />
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        required
        placeholder="Password"
      />
      <button onClick={() => handleLogin(email, password)}>Login</button>
    </div>
  );
};

export default LoginForm;
