import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginButton = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        placeholder="Email address"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        placeholder="Password"
      />
      <button onClick={handleLoginButton}>Sign-up BRO!</button>
    </div>
  );
};

export default LoginPage;
