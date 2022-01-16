import { useContext, useState } from "react";
import { NameContext } from "./A";

const D = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const { name, city, onClick } = useContext(NameContext);
  return (
    <>
      <h1>
        {name} {city}
      </h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={onClick}>clicked me</button>
    </>
  );
};
export default D;
