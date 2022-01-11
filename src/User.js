import { useState } from "react";

const User = () => {
  const [flag, setFlag] = useState(false);
  const [color, setColor] = useState("red");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [salary, setSalary] = useState("");

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
    setFlag(!flag);
    setColor(flag ? "green" : "gray");
  };
  const nameClick = (e) => {
    setName(e.target.value);
    // console.log(e);
  };
  const idClick = (e) => {
    setId(e.target.value);

    // console.log(e);
  };
  const cityClick = (e) => {
    setCity(e.target.value);
  };
  const salaryClick = (e) => {
    setSalary(e.target.value);
  };

  const addUser = () => {
    const e = { name, id, salary, city };
    // const  newuser = [...user,{name}]
    // setUser([ ...user,{ name, id, salary, city }]);
    // setUser([...user, {temp}]);
    setUser((prevState) => [...prevState, e]);
    //setUser("");
    // If you really want to mutate and set new state, you have to clone using JSON.parse,
    //  JSON.strigify, you can't create a real clone otherwise
    // const e = { name, id, salary, city };
    // const newuser = JSON.parse(JSON.stringify(user));
    // newuser.push(e);
    // setUser(newuser);
    console.log(user);
  };

  return (
    <div className="user">
      <h4>UserList Detail:</h4>
      userList:
      <button onClick={onclick} style={{ backgroundColor: color }}>
        show user
      </button>
      <form className="form">
        <div>
          Id:
          <input type="text" value={id} onChange={idClick} />
        </div>
        <div className="child">
          Name: <input type="text" value={name} onChange={nameClick} />
        </div>
        <div>
          Salary:
          <input type="text" value={salary} onChange={salaryClick} />
        </div>
        <div>
          City:
          <input type="text" value={city} onChange={cityClick} />
        </div>

        {/*<input type="text" value={salary} onChange={onChange} />
      <input type="text" value={city} onChange={onChange} />  */}
      </form>
      <button onClick={addUser}>AddNewUser</button>
      {flag && (
        <li>
          {user.map((u, index) => (
            <h3 key={index}>
              {u.name} {u.id} {u.city} {u.salary}
            </h3>
          ))}
        </li>
      )}
    </div>
  );
};
export default User;
