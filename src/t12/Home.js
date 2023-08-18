import React, { useState } from "react";
import GetBox from "./Components/GetBox";
import HideShow from "./Components/HideShow";
import HandleForm from "./Components/HandleForm";
import Condition from "./Components/Condition";
import FormValidation from "./FormValidation";
import PassFasProp from "./Components/PassFasProp";
import Constructor from "./Components/Constructor";
import RenderMethod from "./Components/RenderMethod";

const Home = () => {
  // this is the pass function as a prop

  // function getvalue() {
  //   alert("this is from home");
  // }

  const [name, setname] = useState("umar");

  return (
    <div>
      {/* <GetBox /> */}
      {/* <HideShow /> */}
      {/* <HandleForm /> */}
      {/* <Condition /> */}
      {/* <FormValidation /> */}
      {/* <PassFasProp data={getvalue} /> */}
      {/* <Constructor /> */}
      {/* <RenderMethod name={name} /> */}
      <RenderMethod />

      {/* <button
        onClick={() => {
          setname("ali");
        }}
      >
        Click me
      </button> */}
    </div>
  );
};

export default Home;
