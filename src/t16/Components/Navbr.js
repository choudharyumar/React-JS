import React from "react";
import { NavLink } from "react-router-dom";
import "./User.css";
const Navbr = () => {
  return (
    <>
      <ul className="navbar">
        <li>
          {" "}
          <NavLink
            style={({ isactive }) => {
              return { backgroundColor: isactive ? "green" : "#c8e7d1" };
            }}
            className="navbar-li"
            to="/"
          >
            About
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={"navbar-li"} to="/services">
            Services
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={"navbar-li"} to="/contact">
            contact
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink className={"navbar-li"} to="/filter">
            filter
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbr;
