import React from "react";
import { useState } from "react";
const UpdateData = () => {
  const [data, setData] = useState("umar");
  function New() {
    setData("ali");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={New}>UpdateData</button>
    </div>
  );
};
export default UpdateData;
