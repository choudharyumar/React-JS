import React, { useState } from "react";

const ControlledComp = () => {
  const [item, setitem] = useState("");
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setitem(e.target.value)}
      />
      <h3>value::{item}</h3>
    </div>
  );
};

export default ControlledComp;
