import React, { useState } from "react";

const PostM = () => {
  const [name, setname] = useState("");
  const [city, setcity] = useState("");
  function saveuser() {
    console.log({ name, city });
    let data = { name, city };
    fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {
      methods: "post",
      header: {
        accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
    });
  }

  return (
    <div>
      <h1>Post api method</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
        name="name"
      />{" "}
      <br />
      <br />
      <input
        type="text"
        value={city}
        onChange={(e) => {
          setcity(e.target.value);
        }}
        name="city"
      />
      <br />
      <br />
      <button
        type="button"
        onClick={() => {
          saveuser();
        }}
      >
        save a new user
      </button>
    </div>
  );
};

export default PostM;
