import React from "react";
import { Link } from "react-router-dom";
const Navbr = () => {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to="/">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbr;
