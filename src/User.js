import { useState } from "react";

const User = () => {
  const [flag, setFlag] = useState(false);
  const [color, setColor] = useState("red");
  const [obj, setObj] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [user, setUser] = useState([
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
  ]);

  // const temp =[ {name,id} ]

  const onclick = () => {
    setFlag(!flag), setColor(flag ? "green" : "gray");
  };
  const nameClick = (e) => {
    setName(e.target.value);
    // console.log(e);
  };
  const idClick = (e) => {
    setId(e.target.value);

    // console.log(e);
  };
  const addUser = () => {
    // const  newuser = [...user,{name}]
    setUser([...user, { name, id }]);
    // setUser([...user, {temp}]);

    //  setUser(prevState => ([  ...prevState,{ name }]));

    console.log(user);
  };
  return (
    <div className="user">
      <h4>UserList Detail:</h4>
      userList:
      <button onClick={onclick} style={{ backgroundColor: color }}>
        show user
      </button>
      <form>
        <div>
          Name: <input type="text" value={name} onChange={nameClick} />
        </div>
        <div>
          Id:
          <input type="text" value={id} onChange={idClick} />
        </div>
        {/*<input type="text" value={salary} onChange={onChange} />
      <input type="text" value={city} onChange={onChange} />  */}
      </form>
      <button onClick={addUser}>AddNewUser</button>
      {flag && (
        <li>
          {user.map((u) => (
            <h3 key={u.id}>
              {u.name} {u.id}
            </h3>
          ))}
        </li>
      )}
    </div>
  );
};
export default User;
