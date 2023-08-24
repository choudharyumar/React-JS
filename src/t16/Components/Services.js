import React from "react";
import { Link, useLocation } from "react-router-dom";
const Services = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>this is the services page</h1>
      <p>this is all about services menu</p>
      <Link to="/">services menu</Link>
      <li>
        {" "}
        <Link to="/user/umar">Umar's</Link>
      </li>
      <li>
        {" "}
        <Link to="/user/ali">Ali's</Link>
      </li>
    </div>
  );
};

export default Services;
