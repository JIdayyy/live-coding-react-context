import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ShowTheme() {
  const { theme } = useContext(ThemeContext);

  return <div>{theme}</div>;
}
