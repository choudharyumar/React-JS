import React, { useState } from "react";

const Condition = () => {
  const [logedin, setlogedin] = useState(3);
  return (
    <div>
      {logedin == 1 ? (
        <h1>hello 1</h1>
      ) : logedin == 2 ? (
        <h1>hello 2</h1>
      ) : logedin == 3 ? (
        <h1>hello 3</h1>
      ) : (
        <h1>hello guest</h1>
      )}
    </div>
  );
};

export default Condition;
