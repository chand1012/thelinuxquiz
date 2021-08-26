import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import Quiz from "./components/Quiz";
import { Grid } from "@geist-ui/react";

function App() {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <NavBar themeSwitcher={switchThemes} themeType={themeType} />
      <Grid.Container gap={2} justify="center">
        <Grid>
          <Quiz />
        </Grid>
      </Grid.Container>
    </GeistProvider>
  );
}

export default App;
