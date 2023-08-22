import React from "react";
import Project1 from "./t11";
import UpdateData from "./t11/Component/Statef";
import Project2 from "./t12";
import Project3 from "./t13";
import { Button } from "bootstrap";
import Project4 from "./t14";
import Project5 from "./t15";
import ControlledComp from "./t15/Components/ControlledComp";

const App = () => {
  return (
    <div>
      <h1>This is main file</h1>
      {/* <Project3 /> */}
      {/* <Project4 /> */}
      <Project5 />
    </div>
  );
};

export default App;
