import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const going = (url) => {
    navigate(url);
  };

  return (
    <div>
      <h1>this is the about page</h1>
      <p>hy g</p>
      <button
        onClick={() => {
          going("/services");
        }}
      >
        go to services page
      </button>
      <button
        onClick={() => {
          going("/filter");
        }}
      >
        go to filter page
      </button>
    </div>
  );
};

export default About;
