import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>welcome to the contact page</h1>
      <Link to={"company"}>company</Link>
      <Link to={"other"} state={{ age: 34, name: "haji" }}>
        other
      </Link>
      <Outlet />
    </div>
  );
};

export default Contact;
