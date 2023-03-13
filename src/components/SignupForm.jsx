import React, { useState } from "react";

const SignupForm = ({ setEmail, setPassword, handleSignUp }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <input
        type="text"
        onChange={(event) => setFirstName(event.target.value)}
        required
        placeholder="First Name"
      />
      <input
        type="text"
        onChange={(event) => setLastName(event.target.value)}
        required
        placeholder="Last Name"
      />
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
      <button onClick={() => handleSignUp(firstName, lastName)}>
        Sign Up!
      </button>
    </>
  );
};

export default SignupForm;
