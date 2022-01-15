import React, { useEffect, useState, useReducer } from "react";

const FetchApi = () => {
  const [emp, setEmp] = useState([]);
  const initialstate = [];
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return [...state, ...action.payload];
      default:
        return state;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/users/"
    ).then((res1) => res1.json());
    setEmp(res);
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
      <button onClick={() => dispatch({ type: "SHOW", payload: emp })}>
        Show Employees Details
      </button>
      {state.map((e, index) => (
        <h1 key={index}>{e.name}</h1>
      ))}
    </>
  );
};

export default FetchApi;
