import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function SwitchThemeButton() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (theme === "light") {
      return handleToggleTheme("dark");
    }
    handleToggleTheme("light");
  };

  return <button onClick={handleClick}>Switch Theme : {theme}</button>;
}
