import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Navbr from "./Components/Navbr";
import Page404 from "./Components/Page404";
import User from "./Components/User";
const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbr />
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          {/* <Route path="/*" element={<Page404 />}></Route> */}
          <Route path="/*" element={<Navigate to={"services"} />}></Route>
          <Route path="/user/:name" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
