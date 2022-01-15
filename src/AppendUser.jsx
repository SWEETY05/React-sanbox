import { useEffect, useReducer, useState } from "react";
const AppendUser = () => {
  const [newUser, setNewUser] = useState({});

  const users = [
    {
      id: 1,
      name: "sweety",
      email: ""
    }
  ];
  useEffect(() => {
    fetchMyAPI();
  }, []);

  async function fetchMyAPI() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/");
    response = await response.json();
    setNewUser(response);
  }

  const reducer = (state, action) => {
    if (action.type === "NEW") {
      console.log(action.payload);
      return [...state, ...action.payload];
      //return [...state, action.payload];(foe single user )
    } else {
      return state;
    }
  };

  //const [newUser, dispatch] = useReducer(reducer, users);
  const [state, dispatch] = useReducer(reducer, users);
  return (
    <>
      {state.map((u, index) => (
        <h1 key={index}>
          {u.name} {u.email}
        </h1>
      ))}
      <button onClick={() => dispatch({ type: "NEW", payload: newUser })}>
        ADD
      </button>
    </>
  );
};

export default AppendUser;

// {
//   "id": 1,
//   "name": "Leanne Graham",
//   "username": "Bret",
//   "email": "Sincere@april.biz",
//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"
//   }
// }
