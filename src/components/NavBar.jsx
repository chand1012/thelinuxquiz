import React from "react";
import { Button, Card, Divider, Grid } from "@geist-ui/react";

// This will be the top navbar

const NavBar = ({ themeSwitcher }) => (
  //   Grid container
  <header>
    <Grid.Container justify="center" gap={2}>
      <Grid>
        <Card>
          <h1> TheLinuxQuiz </h1>
        </Card>
        <Card>
          <Button onClick={themeSwitcher}>Theme</Button>
        </Card>
      </Grid>
    </Grid.Container>
    <Divider />
  </header>
);

export default NavBar;
