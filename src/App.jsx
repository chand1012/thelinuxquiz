import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

function App() {
  const [themeType, setThemeType] = useState("light");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <NavBar themeSwitcher={switchThemes} />
    </GeistProvider>
  );
}

export default App;
