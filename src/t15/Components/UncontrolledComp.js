import React from "react";

const UncontrolledComp = () => {
  function abc(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={abc}>
        <input type="text" />
        <br />
        <br />
        <input type="text" />
        <br />
        <br />

        <button> submit</button>
      </form>
    </div>
  );
};

export default UncontrolledComp;
