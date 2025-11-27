import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

import { useTheme } from "../hooks/useTheme";
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  const iconSize: number = 25;
  return (
    <button className="text-gray-50 cursor-pointer" type="button" aria-label="Toggle Theme" onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon size={iconSize} />
      ) : (
        <MdSunny size={iconSize} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
