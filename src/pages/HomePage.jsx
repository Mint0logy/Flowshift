import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isAuth = useSelector((state) => state.user.value);

  return isAuth ? (
    <div>Home Page - user Authenticated</div>
  ) : (
    <div>Nie ma takiego bicia</div>
  );
};

export default HomePage;
