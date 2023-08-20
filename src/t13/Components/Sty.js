import React from "react";
import "./style.css";
import style from "./custom.module.css";

const Sty = () => {
  return (
    <div>
      <h1 className="primary">here is style type 1</h1>
      <h1 style={{ backgroundColor: "#acff00", color: "gray" }}>
        here is style type 2
      </h1>
      <h1 className={style.success}>here is style type 3</h1>
    </div>
  );
};

export default Sty;
