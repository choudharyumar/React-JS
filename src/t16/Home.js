import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Navbr from "./Components/Navbr";
const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbr />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
