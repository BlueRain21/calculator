import { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

import { ThemeContext } from "../context/Theme";

const ThemeButton = () => {
  const { changeTheme, theme } = useContext(ThemeContext);
  const Icon = theme == "light" ? FiMoon  : IoSunny 

  return (
    <>
      <button
        className="w-15 h-15 border-2 border-pale-grey dark:border-charcoal-dark rounded-full cursor-pointer flex justify-center items-center text-2xl text-amaranth-red"
        onClick={changeTheme}
      >
        <div>{theme == "light" ? <FiMoon /> : <IoSunny />}</div>
      </button>
    </>
  );
};

export default ThemeButton;
