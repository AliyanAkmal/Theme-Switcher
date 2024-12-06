import { createContext } from "react";
import { useContext } from "react";

const ThemeContext = createContext({
  themeMode: "dark",
  darkMode: () => {},
  lightMode: () => {},
});
export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
