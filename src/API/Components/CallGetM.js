import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const CallGetM = () => {
  const [data, setdata] = useState([]);
  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products?limit=5").then((result) => {
  //       result.json().then((resp) => {
  //         //   console.log(resp);
  //         setdata(resp);
  //       });
  //     });
  //   }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setdata(data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Call Get Method</h1>
      <Table striped bordered hover>
        <tr>
          <td>id</td>
          <td>title</td>
        </tr>

        {data.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
};

export default CallGetM;
