import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setUserState } from "../features/User";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/SignupForm/SignupForm";
import styles from "./SignupPage.module.css";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addUserToAuthentication = async (email, password) => {
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return createdUser.user.uid;
  };

  const handleSignup = async (firstName, lastName, email, password) => {
    addUserToAuthentication(email, password).then((userId) => {
      setDoc(doc(database, "users", userId), { firstName, lastName });
      dispatch(setUserState(userId));
      navigate("/Dashboard");
    });
  };

  return (
    <div className={styles.container}>
      <SignupForm handleSignup={handleSignup} />
    </div>
  );
};

export default SignupPage;
