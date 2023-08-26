import React from "react";

const StateObj = () => {
  const [data, setdata] = React.useState({ name: "umar", age: 23 });
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <input
        type="text "
        placeholder="enter your name"
        value={data.name}
        onChange={(e) => {
          //   setdata({ age: data.age, name: e.target.value });
          setdata({ ...data, name: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="text "
        placeholder="enter your age"
        value={data.age}
        onChange={(e) => {
          //   setdata({ name: data.name, age: e.target.value });
          setdata({ ...data, age: e.target.value });
        }}
      />
    </div>
  );
};

export default StateObj;
