import React from "react";

const LoginForm = ({ setEmail, setPassword, handleLogin }) => {
  return (
    <>
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
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default LoginForm;
