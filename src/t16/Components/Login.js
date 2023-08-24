import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const loggin = () => {
    localStorage.setItem("login", true);
    navigate("/");
  };
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  });

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Enter your name"></input>
      <br />
      <br />
      <input type="text" placeholder="Enter your Password"></input>
      <br />
      <br />
      <button onClick={loggin}>submit</button>
    </div>
  );
};

export default Login;
