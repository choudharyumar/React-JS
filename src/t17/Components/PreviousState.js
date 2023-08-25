import React, { useState } from "react";

const PreviousState = () => {
  const [count, setcount] = useState(1);
  function updateCounter() {
    // let ran = Math.floor(Math.random() * 10);
    // setcount((pre) => {
    //   console.log(pre);
    //   if (pre < 5) {
    //     alert("low value");
    //   }
    //   return ran;
    // });

    for (let i = 0; i < 5; i++) {
      setcount((pre) => {
        return pre + 1;
      });
    }
  }
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          updateCounter();
        }}
      >
        click me to update count
      </button>
    </div>
  );
};

export default PreviousState;
