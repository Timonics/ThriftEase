import React from "react";

import { Routes, Route } from "react-router-dom";

import Intro from "./components/IntroPage/Intro";
import Home from "./components/home/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import HomeBody from "./components/home/HomeBody";
import DashBoardLayout from "./components/DashBoard/DashBoardLayout";
import SellAnItem from "./components/Listing.tsx/SellAnItem";
import Cart from "./components/Cart/Cart";
import Category from "./components/Category/Category";
import Search from "./components/Search/Search";
import Categories from "./components/Category/Categories/container/Categories";
import CategoryOutlet from "./components/Category/Categories/CategoryOutlet";
import { useMyContext } from "./context/MyAppDataProvider";

const App: React.FC = () => {
  const { categories } = useMyContext();

  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="home" element={<Home />}>
        <Route index element={<HomeBody />} />
        <Route path="dashboard" element={<DashBoardLayout />} />
        <Route path="listing" element={<SellAnItem />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<Category />} />
        <Route path="search" element={<Search />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Signup />} />
      <Route path="categories" element={<Categories />}>
        {categories.map((category) => {
          const categoryName = category.name.split(" ");
          categoryName[1] = "-and-";
          const categoryPath = categoryName.join("").toLowerCase();
          return (
            <Route
              key={category.id}
              path={categoryPath}
              element={<CategoryOutlet />}
            />
          );
        })}
      </Route>
    </Routes>
  );
};

export default App;
