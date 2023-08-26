import React, { useState } from "react";
import User1 from "./User1";

const PreviousProps = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <User1 counter={count} />
      <button
        onClick={() => {
          setcount(Math.floor(Math.random() * 10));
        }}
      >
        click to update
      </button>
    </div>
  );
};

export default PreviousProps;
