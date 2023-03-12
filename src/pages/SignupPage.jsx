import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignupPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUpButton = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Login");
    } catch (error) {
      console.log(error.massage);
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
      <button onClick={handleSignUpButton}>Sign-up BRO!</button>
    </div>
  );
};

export default SignupPage;
