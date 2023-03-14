import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "./features/User";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Login" element={<LoginPage />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/Home" element={<HomePage />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
