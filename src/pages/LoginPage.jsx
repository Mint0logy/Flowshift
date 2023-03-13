import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <LoginForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      ></LoginForm>
    </div>
  );
};

export default LoginPage;
