import React from "react";

import { Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Home from "./components/home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Signup />} />
    </Routes>
  );
};

export default App;
