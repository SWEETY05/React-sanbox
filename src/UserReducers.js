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

  return (
    <>
      <button
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
      </button>

      <h1>
        {state.map((name) => (
          <p key={name.id}>{name.name}</p>
        ))}
      </h1>
    </>
  );
};

export default UserReducers;
