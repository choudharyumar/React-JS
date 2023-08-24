import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  Router,
  Navigate,
  useNavigate,
} from "react-router-dom";
import About from "./Components/About";
import Services from "./Components/Services";
import Navbr from "./Components/Navbr";
import Page404 from "./Components/Page404";
import User from "./Components/User";
import UseParam from "./Components/UseParam";
import Contact from "./Components/Contact";
import Company from "./Components/Company";
import Other from "./Components/Other";
import Login from "./Components/Login";
import Protected from "./Components/Protected";

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbr />
        <Routes>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/" element={<Protected Compo={About} />}></Route>
          <Route path="/services" element={<Services />}></Route>
          {/* <Route path="/*" element={<Page404 />}></Route> */}
          <Route path="/*" element={<Navigate to={"services"} />}></Route>
          <Route path="/user/:name" element={<User />}></Route>
          <Route path="/filter" element={<UseParam />}></Route>
          <Route path="/contact/" element={<Contact />}>
            <Route
              path="company"
              element={<Protected Compo={Company} />}
            ></Route>
            <Route path="other" element={<Other />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
