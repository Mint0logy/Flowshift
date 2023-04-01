import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { setUserState } from "../features/User";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    dispatch(setUserState(auth.currentUser.uid));
    navigate("/Dashboard");
  };

  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
