import React, { useState, useMemo } from "react";

const Usememo1 = () => {
  const [count, setcount] = useState(1);
  const [item, setitem] = useState(10);

  const abcMemo = useMemo(
    function abc() {
      console.log("here is function");
      return count + 1;
    },
    [count]
  );

  return (
    <div>
      <h1>this is the count ::{count}</h1>
      <h1>this is the item ::{item}</h1>
      <h1>{abcMemo}</h1>

      <button onClick={() => setcount(count + 1)}>update count</button>
      <button onClick={() => setitem(item * 2)}>update item</button>
    </div>
  );
};

export default Usememo1;
