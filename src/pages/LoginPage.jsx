import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import LoginForm from "../components/LoginForm";
import { changeAuth } from "../features/User";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(changeAuth());
      navigate("/Home");
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
