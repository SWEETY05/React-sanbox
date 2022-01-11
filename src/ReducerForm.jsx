import { useReducer } from "react";

const UserReducers = () => {
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
        console.log(...state, action.user);
        return [...state, action.user];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialstate);

  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name } = e.target.value;
    dispatch({ type: "ADDUSER" });
  };
  return (
    <>
      {/* <button
        onClick={() =>
          dispatch({
            type: "ADDUSER",
            user: {
              name: "John Smith",
              id: 3,
              salary: "50 lac",
              city: "Pune"
            }
          })
        }
      >
        AddNewUser
      </button> */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={""}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Name "
          />
        </div>
      </form>

      <h1>
        {state.map((name) => (
          <p key={name.id}>{name.name}</p>
        ))}
      </h1>
    </>
  );
};

export default UserReducers;
