import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
const List = () => {
  const arr = [
    { name: "umar", class: 5, contact: 1111 },
    { name: "ali", class: 5, contact: 1111 },
    { name: "hamza", class: 5, contact: 3333 },
  ];
  return (
    <div>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <td>name</td>
            <td>class</td>
            <td>contact</td>
          </tr>
          {arr.map((data, i) =>
            data.contact === 1111 ? (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.class}</td>
                <td>{data.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default List;
