import React from "react";
import { useSearchParams } from "react-router-dom";

const UseParam = () => {
  const [searchparam, setsearchparam] = useSearchParams();
  console.warn(searchparam.get("age"));
  console.warn(searchparam.get("city"));
  const age = searchparam.get("age");
  const city = searchparam.get("city");

  return (
    <div>
      <h1>filter</h1>
      <h1>age is::{age}</h1>
      <h1>city is::{city}</h1>
      <button
        onClick={() => {
          setsearchparam({ age: 45 });
        }}
      >
        set age is{" "}
      </button>
      <input
        type="text"
        onChange={(e) => {
          setsearchparam({ text: e.target.value, age: 44 });
        }}
        placeholder="enter the text"
      />
    </div>
  );
};

export default UseParam;
