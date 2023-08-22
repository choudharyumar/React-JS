import React, { forwardRef } from "react";

const User = (props, item) => {
  return (
    <div>
      <input type="text" ref={item} />
    </div>
  );
};

export default forwardRef(User);
