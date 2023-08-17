import React, { useState } from "react";

const Student = (prop) => {
  // console.log(prop);
  const [name, setstate] = useState("Umar");
  return (
    <div
      style={{
        backgroundColor: "#99abc9",
        margin: 10,
        border: " 4px solid gray",
        borderRadius: "18px",
      }}
    >
      <h1> hello: {name} </h1>
      <button
        onClick={() => {
          setstate("Ali");
        }}
      >
        update by click
      </button>
      <h2> hello: {prop.email} </h2>
      <h3> address: {prop.others.address} </h3>
      <h3> address: {prop.others.contact} </h3>
    </div>
  );
};

export default Student;
