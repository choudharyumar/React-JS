import React, { useState } from "react";

const HandleForm = () => {
  const [name, setname] = useState("");
  const [option, setoption] = useState("");
  const [terms, setterms] = useState(false);
  function getformData(e) {
    console.log(name, option, terms);
    e.preventDefault();
  }
  return (
    <div
      style={{
        backgroundColor: "#99abc9",
        margin: 10,
        border: " 4px solid gray",
        borderRadius: "18px",
      }}
    >
      <form onSubmit={getformData}>
        <input
          type="text"
          placeholder="Enter name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <select
          onChange={(e) => {
            setoption(e.target.value);
          }}
        >
          <option>Select Options</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onClick={(e) => {
            setterms(e.target.checked);
          }}
        ></input>
        <span>Accept terms and conditions</span>
        <button type="submit">submit</button>
        <button>Clear</button>
      </form>
    </div>
  );
};

export default HandleForm;
