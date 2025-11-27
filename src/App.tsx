import { useEffect } from "react";
import "./App.css";
import AppTitle from "./components/AppTitle";
import DateRender from "./components/DateRender";
import HeaderBG from "./components/HeaderBG";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./providers/ThemeProvider";
import ShowQuote from "./components/ShowQuote";
import AddInput from "./components/AddInput";
import Todos from "./components/Todos";

function App() {
  useEffect(() => {
  let themeVal = "light";
  try {
    const themeStorage = JSON.parse(localStorage.getItem("theme-storage") || "{}");
    themeVal = themeStorage?.state?.theme || "light";
  } catch (e) {
    themeVal = "light";
    console.error("Error parsing theme from localStorage:", e);
  }
  document.documentElement.setAttribute("data-theme", themeVal);
}, []);

  return (
    <>
      <ThemeProvider>
        <main className="relative w-full h-screen bg-gray-50 dark:bg-navy-950">
          <HeaderBG />
          <DateRender />
          <div className="w-full absolute top-20 left-0 flex justify-center items-center">
            <div className="w-11/12 md:w-1/2 lg:w-1/3 mx-auto px-5 flex flex-col gap-y-1">
              <div className="flex justify-between items-center">
                <AppTitle />
                <ThemeSwitcher />
              </div>
              <ShowQuote />
              <AddInput />
              <Todos />
              
            </div>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
