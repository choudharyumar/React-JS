import React, { useState } from "react";

const Hooks = () => {
  const [name, setstate] = useState("umar");
  return (
    <div>
      <h1>{name}</h1>
      <button
        onClick={() => {
          setstate("ali");
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Hooks;
