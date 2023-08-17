import React from "react";

const Student = (prop) => {
  console.log(prop);
  return (
    <div
      style={{
        backgroundColor: "#99abc9",
        margin: 10,
        border: " 4px solid gray",
        borderRadius: "18px",
      }}
    >
      <h1> hello: {prop.name} </h1>
      <h2> hello: {prop.email} </h2>
      <h3> address: {prop.others.address} </h3>
      <h3> address: {prop.others.contact} </h3>
    </div>
  );
};

export default Student;
