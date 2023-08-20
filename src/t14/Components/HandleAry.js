import React from "react";

const HandleAry = () => {
  //   const arr = ["ali", "hamza", "khizar"];
  //   create object array
  const arr = [
    { name: "imran", class: 6, contact: 1234 },
    { name: "ali", class: 7, contact: 2222 },
    { name: "hamza", class: 8, contact: 333 },
    { name: "umar", class: 9, contact: 444 },
  ];
  //   arr.map((temp) => {
  //     console.log(temp);
  //   });
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log("calling by for loop", arr[i]);
  //   }
  return (
    <div>
      <table border={"1"}>
        <tr>
          <td>name</td>
          <td>class</td>
          <td>contact</td>
        </tr>

        {arr.map((data) => (
          <tr>
            <td>{data.name}</td>
            <td>{data.class}</td>
            <td>{data.contact}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default HandleAry;
