import React from "react";
import { Table } from "react-bootstrap";

const NestedAry = () => {
  const arr = [
    {
      name: "imran",
      class: 6,
      contact: 1234,
      address: [
        { hn: "12", state: "punjab", city: "lay" },
        { hn: "13", state: "punjab", city: "fat" },
        { hn: "14", state: "sin", city: "cho" },
        { hn: "15", state: "bla", city: "mul" },
      ],
    },

    {
      name: "ali",
      class: 7,
      contact: 2222,
      address: [
        { hn: "12", state: "punjab", city: "lay" },
        { hn: "13", state: "punjab", city: "fat" },
        { hn: "14", state: "sin", city: "cho" },
        { hn: "15", state: "bla", city: "mul" },
      ],
    },
    {
      name: "hamza",
      class: 8,
      contact: 333,
      address: [
        { hn: "12", state: "punjab", city: "lay" },
        { hn: "13", state: "punjab", city: "fat" },
        { hn: "14", state: "sin", city: "cho" },
        { hn: "15", state: "bla", city: "mul" },
      ],
    },
    {
      name: "umar",
      class: 9,
      contact: 444,
      address: [
        { hn: "12", state: "punjab", city: "lay" },
        { hn: "13", state: "punjab", city: "fat" },
        { hn: "14", state: "sin", city: "cho" },
        { hn: "15", state: "bla", city: "mul" },
      ],
    },
  ];
  return (
    <div>
      <Table variant="dark" striped>
        <tbody>
          <tr>
            <td>S.R</td>

            <td>name</td>
            <td>class</td>
            <td>contact</td>
            <td>address</td>
          </tr>

          {arr.map((data, i) => (
            <tr key={i}>
              <td>{i + 1}</td>

              <td>{data.name}</td>
              <td>{data.class}</td>
              <td>{data.contact}</td>

              <td>
                <Table variant="dark" striped>
                  <tr>
                    <td>S.R</td>

                    <td>Home</td>
                    <td>State</td>
                    <td>City</td>
                  </tr>
                  {data.address.map((item, n) => (
                    <tr key={n}>
                      <td>{n + 1}</td>

                      <td>{item.hn}</td>
                      <td>{item.state}</td>
                      <td>{item.city}</td>
                    </tr>
                  ))}
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NestedAry;
