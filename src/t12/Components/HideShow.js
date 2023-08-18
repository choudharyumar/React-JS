import React, { useState } from "react";

const HideShow = () => {
  const [data, setstate] = useState(null);
  return (
    <div>
      {data ? <h1>here is umar</h1> : null}
      {/* <button
        onClick={() => {
          setstate(false);
        }}
      >
        Hide
      </button>
      <button
        onClick={() => {
          setstate(true);
        }}
      >
        Show
      </button>
       */}

      <button
        onClick={() => {
          setstate(!data);
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default HideShow;
