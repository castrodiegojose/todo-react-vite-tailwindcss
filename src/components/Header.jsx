import { useState, useEffect } from "react";
import MoonIcon from "../components/icons/IconMoon";
import IconSun from "../components/icons/IconSun";

const initialStateDarkMode = localStorage.theme === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);
  // const handleClickToggleTheme = () =>{

  // }
  return (
    <header className="container mx-auto pt-8 px-4">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
          Todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
