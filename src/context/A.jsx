import { createContext } from "react";
import B from "./B";
export const NameContext = createContext();

const A = () => {
  const onClick = () => {
    console.log("Clicked");
  };
  const context = { name: "Sweety", city: "pune", onClick };
  //const name = 'sweety'

  return (
    <>
      <NameContext.Provider value={context}>
        <B />
      </NameContext.Provider>
    </>
  );
};
export default A;
