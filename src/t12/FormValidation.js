import React, { useState } from "react";

const FormValidation = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [UserError, seterror] = useState(false);
  const [passError, setpasserror] = useState(false);

  function Handle(e) {
    if (name.length < 4 || password.length < 4) {
      alert("please enter the correct values");
    } else {
      alert("all good:)");
    }
    e.preventDefault();
  }
  function valuehandler(e) {
    let data = e.target.value;

    if (data.length < 4) {
      seterror(true);
    } else {
      seterror(false);
    }

    setname(data);
  }

  function passhandler(e) {
    let data = e.target.value;

    if (data.length < 4) {
      setpasserror(true);
    } else {
      setpasserror(false);
    }
    setpassword(data);
  }
  return (
    <div>
      <h3
        style={{
          display: "block",
          border: "2px solid gray",
          textAlign: "justify",
          borderRadius: "8px",
          backgroundColor: "#c7e7e5",
          padding: "10px",

          width: "170px",
        }}
      >
        Login
      </h3>
      <form onSubmit={Handle}>
        <input
          type="text"
          placeholder="Enter your name"
          style={{ fontWeight: "bolder" }}
          onChange={valuehandler}
        />
        {UserError ? <span>user not valid</span> : ""}

        <br />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          style={{ fontWeight: "bolder" }}
          onChange={passhandler}
        />
        {passError ? <span>password not valid</span> : ""}

        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};

export default FormValidation;
