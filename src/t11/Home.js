import React from "react";
import Footer from "./Component/Footer";
import About from "./Component/About";
import UpdateData from "./Component/Statef";
import Abc from "./Component/StateC";
import Student from "./Component/PropF";
import ST from "./Component/PropC";

const Home = () => {
  return (
    <div>
      {/* <About /> */}
      {/* <Footer /> */}
      {/* <UpdateData /> */}
      {/* <Abc /> */}
      {/* <Student
        name="umar"
        email="ch@gmail.com"
        others={{ address: "g4", contact: "0345678" }}
      />
      <Student
        name="Ali"
        email="ch@gmail.com"
        others={{ address: "g4", contact: "0345678" }}
      />
      <Student
        name="Hamza"
        email="ch@gmail.com"
        others={{ address: "g4", contact: "0345678" }}
      />
      <Student
        name="Khizar"
        email="ch@gmail.com"
        others={{ address: "g4", contact: "0345678" }}
      /> */}

      <ST name="khizar" email="ch@gmail.com" />
    </div>
  );
};

export default Home;
