import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CallGetM = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5").then((result) => {
      result.json().then((resp) => {
        //   console.log(resp);
        setdata(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Call Get Method</h1>
      <Table striped bordered hover>
        <tr>
          <td>id</td>
          <td>tittle</td>
        </tr>

        {data.map((item) => {
          <tr>
            <td>{item.id}</td>
            <td>{item.tittle}</td>
          </tr>;
        })}
      </Table>
    </div>
  );
};

export default CallGetM;
