import { useEffect, useState } from "react";
import "./App.css";
import ThemeBtn from "./components/button/Button";
import Card from "./components/card/card";
import { ThemeProvider } from "./contexts/contextapi";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };
  //////////////////////////
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* card */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* button */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
