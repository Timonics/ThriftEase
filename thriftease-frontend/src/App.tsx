import React from "react";

import { Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Home from "./components/home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import HomeBody from "./components/home/HomeBody";
import DashBoard from "./components/DashBoard/DashBoard";
import SellAnItem from "./components/Listing.tsx/SellAnItem";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />}>
        <Route index element={<HomeBody />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="listing" element={<SellAnItem />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<Category />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Signup />} />
    </Routes>
  );
};

export default App;
