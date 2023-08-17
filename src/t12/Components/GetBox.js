import React, { useState } from "react";

const GetBox = () => {
  const [data, setstate] = useState(null);
  const [print, setprint] = useState(false);

  function Getdata(val) {
    console.log(val.target.value);
    setstate(val.target.value); //to get value from the box
    setprint(false); //this is use when we remove the value
  }
  return (
    <div>
      {print ? <h1>Get input box value:: {data}</h1> : null}
      {/* function is called in this */}
      <input type="text" onChange={Getdata}></input>

      {/* on change we get the printed value */}
      <button
        onClick={() => {
          setprint(true);
        }}
      >
        {" "}
        Print Value
      </button>
    </div>
  );
};

export default GetBox;
