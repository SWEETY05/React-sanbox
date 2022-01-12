import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
const FormNew = () => {
  const [user, setUser] = useState();

  const { register, handleSubmit } = useForm([]);
  //let data1 = [];
  const onSubmit = (data) => {
    let data1 = [JSON.parse(JSON.stringify(data))];
    setUser(data1);
    console.log(user);
  };

  const initialState = {};
  const Reducer = (state, action) => {
    switch (action.type) {
      case "SHOWUSER":
        return [...state, { user }];
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const onClick = () => {
    dispatch({ type: "SHOWUSER", payload: user });
    return user.map((u) => <h3>{u.name}</h3>);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="id" {...register("id")} />
        <input placeholder="age" {...register("age")} />
        <input placeholder="name" {...register("name")} />

        <input type="submit" />
      </form>
      <button onClick={onClick}>SHOWUsers</button>
    </>
  );
};
export default FormNew;
