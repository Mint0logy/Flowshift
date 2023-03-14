import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, database } from "../firebase";
import SignupForm from "../components/SignupForm";
import { changeAuth } from "../features/User";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUp = async (firstName, lastName) => {
    try {
      const createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await setDoc(doc(database, "users", createdUser.user.uid), {
        firstName: firstName,
        lastName: lastName,
      });
      dispatch(changeAuth());
      navigate("/Home");
    } catch (error) {
      console.log(error.massage);
    }
  };

  return (
    <div>
      <SignupForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleSignUp={handleSignUp}
      ></SignupForm>
    </div>
  );
};

export default SignupPage;
