import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>welcome to the contact page</h1>
      <Link to={"company"}>company</Link>
      <Link to={"other"}>other</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
