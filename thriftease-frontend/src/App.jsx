import React from "react";

import { Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Home from "./container/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />} />
    </Routes>
  );
};

export default App;
