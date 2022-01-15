import { useReducer, useState } from "react";

const ReducerForm = () => {
  const [input, setInput] = useState("");
  const [id, setId] = useState(0);
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
  //const data = { input, id };
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDUSER":
        console.log(action.payload);
        return [...state, ...action.payload];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [
      {
        name: input,
        id: id
      }
    ];
    dispatch({
      type: "ADDUSER",
      payload: data
    });
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
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
          id :{" "}
          <input
            type="text"
            name="id"
            value={id}
            onChange={handleChangeId}
            className="form-control"
            placeholder="Enter Id... "
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          submit
        </button>
      </form>

      {state.map((e, index) => (
        <h2 key={index}>
          {e.name} {e.id}
        </h2>
      ))}
    </>
  );
};

export default ReducerForm;
