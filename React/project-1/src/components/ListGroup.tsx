// import { Fragment } from "react";--
// we are not require to import this fragment we use only <>
// import { MouseEvent } from "react";

import { useState } from "react";

function ListGroup() {
  let items = ["layyah", "lahore", "chowk azam"];
  // let selectedIndex = 0;

  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //  arr[0]//variable(selected index)
  //  arr[1]//function updated

  // items = [];
  //   const message = items.length === 0 ? <p>sorry there is no item</p> : null;-- we use this as to clean our jsx

  //   we use function for rendering because it is better option
  //   const getmessage = () => {
  //     return items.length === 0 ? <p>sorry there is no item</p> : null;
  //   };
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>Lists</h1>
  //         <p>sorry no items</p>
  //       </>
  //     );

  // event handler
  // const handleclick = (event: MouseEvent) => {
  //   console.log(event);
  // };
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>sorry there is no item</p> : null} */}
      {items.length === 0 && <p>we are working on this project</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
      </ul>
    </>
  );
}
export default ListGroup;
