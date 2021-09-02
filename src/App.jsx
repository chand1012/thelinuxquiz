import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { Grid, Tabs } from "@geist-ui/react";

import { Switch, Route, useHistory } from "react-router-dom";

import Index from "./pages/Index";
import Distros from "./pages/DistroPage";
import About from "./pages/About";

function App() {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  const history = useHistory();
  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <NavBar themeSwitcher={switchThemes} themeType={themeType}>
        <Tabs
          hideDivider
          initialValue="/"
          onChange={(value) => history.push(value)}
        >
          <Tabs.Item label={"home"} value={"/"} />
          <Tabs.Item label={"distros"} value={"distros"} />
          <Tabs.Item label={"about"} value={"about"} />
        </Tabs>
      </NavBar>
      <Grid.Container gap={2} justify="center">
        <Switch>
          <Route path="/distros">
            <Grid>
              <Distros />
            </Grid>
          </Route>
          <Route path="/about">
            <Grid>
              <About />
            </Grid>
          </Route>
          <Route path="/">
            <Grid>
              <Index />
            </Grid>
          </Route>
        </Switch>
      </Grid.Container>
    </GeistProvider>
  );
}

export default App;
