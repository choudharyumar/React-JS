import React from "react";
import GetBox from "./Components/GetBox";
import HideShow from "./Components/HideShow";
import HandleForm from "./Components/HandleForm";
import Condition from "./Components/Condition";
import FormValidation from "./FormValidation";
import PassFasProp from "./Components/PassFasProp";

const Home = () => {
  function getvalue() {
    alert("this is from home");
  }
  return (
    <div>
      {/* <GetBox /> */}
      {/* <HideShow /> */}
      {/* <HandleForm /> */}
      {/* <Condition /> */}
      {/* <FormValidation /> */}
      <PassFasProp data={getvalue} />
    </div>
  );
};

export default Home;
