import { useReducer, useState } from "react";

const GeneralForm = () => {
  const [task, setTask] = useState("");
  const todos = [
    {
      task: "one"
    }
  ];

  const ACTION = {
    ADD: "add"
  };

  function reducer(state = todos, action) {
    switch (action.type) {
      case ACTION.ADD:
        console.log([...state, { task: action.payload }]);
        return [...state, { task: action.payload }];
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, todos);

  const AddTask = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.ADD, payload: task });
    setTask("");
  };

  return (
    <>
      {state.map((s, index) => (
        <h1 key={index}>{s.task}</h1>
      ))}

      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={AddTask} />
      </form>
    </>
  );
};

export default GeneralForm;
