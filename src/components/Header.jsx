import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "space-around",
  };

  return (
    <div style={style}>
      <Link to="/">Home</Link>
      <Link to="/Login">Login</Link>
      <Link to="/Signup">Signup</Link>
    </div>
  );
};

export default Header;
