import { useReducer } from "react";
import { useForm } from "react-hook-form";
const FormNew = () => {
  const { register, handleSubmit } = useForm([]);

  const initialState = [
    {
      id: 1,
      name: "sawlikar use form",
      age: 27
    }
  ];
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADDUSER":
        return [...state, action.payload];

      default:
        return state;
        console.log(state);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = (data) => {
    dispatch({ type: "ADDUSER", payload: data });
  };

  return (
    <>
      {state.map((s, index) => (
        <div key={index}>
          <h3>{s.id}</h3>
          <h3>{s.age}</h3>
          <h3>{s.name}</h3>
        </div>
      ))}

      <form onSubmit={handleSubmit(submit)}>
        <input placeholder="id" {...register("id")} />
        <input placeholder="age" {...register("age")} />
        <input placeholder="name" {...register("name")} />
      </form>
    </>
  );
};
export default FormNew;
