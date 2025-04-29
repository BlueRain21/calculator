import { useContext } from "react";

import { MainContext, dispatchMethods } from "../context/MainContext";
import logo from "/calculator.webp";

const Output = () => {
  const [{ equation, result }, dispatch] = useContext(MainContext);

  return (
    <div className="text-right relative pt-30">
      {/* <p className="text-[20px] text-muted-blue-grey-light dark:text-muted-blue-grey-dark mx-10 overflow-scroll">{equation}</p> */}
      <label htmlFor="inp1">
        <span className="hidden">Enter values here</span>
        <input
          type="text"
          value={equation}
          className="text-[20px] text-muted-blue-grey-light dark:text-muted-blue-grey-dark mx-10 overflow-scroll text-right focus:border-none focus:outline-none"
          onChange={(e) => {
            dispatch({ type: dispatchMethods.input, payload: e.target.value });
          }}
          id="inp1"
        />
      </label>
      <p className="pb-10 mx-10 font-medium text-[48px] overflow-scroll">
        {result}
      </p>
      <img className="w-[50px] absolute top-5 left-5 " src={logo} alt="logo" />
    </div>
  );
};

export default Output;
