import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GeistProvider, CssBaseline } from "@geist-ui/react";
import { Grid, Tabs } from "@geist-ui/react";

import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Distros from "./pages/DistroPage";
import About from "./pages/About";
import Stats from "./pages/Stats";
import NotFound from "./pages/404";

function App() {
  const [themeType, setThemeType] = useState("dark");
  const switchThemes = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };
  const history = useHistory();
  const location = useLocation();

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <NavBar themeSwitcher={switchThemes} themeType={themeType}>
        <Tabs
          hideDivider
          value={location.pathname}
          onChange={(value) => history.push(value)}
        >
          <Tabs.Item label={"home"} value={"/"} />
          <Tabs.Item label={"distros"} value={"/distros"} />
          <Tabs.Item label={"about"} value={"/about"} />
          <Tabs.Item label={"stats"} value={"/stats"} />
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
          <Route path="/stats">
            <Grid>
              <Stats />
            </Grid>
          </Route>
          <Route exact path="/">
            <Grid>
              <Index />
            </Grid>
          </Route>
          <Route path="*">
            <Grid>
              <NotFound />
            </Grid>
          </Route>
        </Switch>
      </Grid.Container>
    </GeistProvider>
  );
}

export default App;
