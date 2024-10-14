import React from "react";

import { Routes, Route } from "react-router-dom";

import Intro from "./components/IntroPage/Intro";
import Home from "./components/home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import HomeBody from "./components/home/HomeBody";
import DashBoard from "./components/DashBoard/DashBoard";
import SellAnItem from "./components/Listing.tsx/SellAnItem";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
import Categories from "./components/Category/Categories/container/Categories";
import ElectronicsCat from "./components/Category/Electronics/ElectronicsCat";
import FashionCat from "./components/Category/Fashion/FashionCat";
import HomeCat from "./components/Category/Home/HomeCat";
import BooksCat from "./components/Category/Books/BooksCat";
import SportsCat from "./components/Category/Sports/SportsCat";
import MusicCat from "./components/Category/Music/MusicCat";
import BeautyCat from "./components/Category/Beauty/BeautyCat";
import AutoMobileCat from "./components/Category/Automobile/AutoMobileCat";
import Miscellaneous from "./components/Category/Miscellaneous/Miscellaneous";

const App: React.FC = () => {
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
      <Route path="categories" element={<Categories />}>
        <Route path="electronics-and-gadgets" element={<ElectronicsCat />} />
        <Route path="fashion-and-apparels" element={<FashionCat />} />
        <Route path="home-and-living" element={<HomeCat />} />
        <Route path="books-and-stationery" element={<BooksCat />} />
        <Route path="sports-and-outdoor" element={<SportsCat />} />
        <Route path="music-and-instruments" element={<MusicCat />} />
        <Route path="beauty-and-health" element={<BeautyCat />} />
        <Route path="automobiles" element={<AutoMobileCat />} />
        <Route path="miscellaneous" element={<Miscellaneous />} />
      </Route>
    </Routes>
  );
};

export default App;
