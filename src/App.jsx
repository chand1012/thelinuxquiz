import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { Grid, Tabs } from "@geist-ui/react";

import Index from "./pages/Index";
import Distros from "./pages/DistroPage";
import About from "./pages/About";
import NotFound from "./pages/404";

function App() {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };

  const [currentPage, setCurrentPage] = useState("index");

  // this is the function that changes the current page
  const returnCurrentPage = () => {
    console.log("Setting page");
    switch (currentPage) {
      case "index":
        return <Index />;
      case "distros":
        return <Distros />;
      case "about":
        return <About />;
      default:
        return <NotFound />;
    }
  };

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <NavBar themeSwitcher={switchThemes} themeType={themeType}>
        <Tabs hideDivider initialValue="index" onChange={setCurrentPage}>
          {/* "value" has to match what the name of the page is in the 
          returnCurrentPage function */}
          <Tabs.Item label={"home"} value={"index"} />
          <Tabs.Item label={"distros"} value={"distros"} />
          <Tabs.Item label={"about"} value={"about"} />
        </Tabs>
      </NavBar>
      <Grid.Container gap={2} justify="center">
        <Grid>{returnCurrentPage()}</Grid>
      </Grid.Container>
    </GeistProvider>
  );
}

export default App;
