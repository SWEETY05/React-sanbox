import { useReducer, useState } from "react";
const ReducerForm = () => {
  const [input, setInput] = useState();
  const initialstate = [
    {
      name: "Ram",
      id: 1,
      salary: 50,
      city: "Pune"
    },
    {
      name: "Dev",
      id: 2,
      salary: 550,
      city: "Nashik"
    }
  ];
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDUSER":
        console.log(...state, { name: action.payload });
        return [...state, action.payload];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADDUSER",
      payload: input
    });
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          name:{" "}
          <input
            type="text"
            name="name"
            value={input}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Name... "
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          submit
        </button>
      </form>

      {/* <h1>
        {state.map((n) => (
          <p key={n.id} [n]</p>
        ))}
      </h1> */}
    </>
  );
};

export default ReducerForm;
