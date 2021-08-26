import React from "react";
import { Button, Card, Divider, Grid } from "@geist-ui/react";

// This will be the top navbar
// needs finished

const NavBar = ({ themeSwitcher }) => (
  //   Grid container
  <header>
    <Grid.Container height="100px" justify="center" gap={2}>
      <Grid>
        <Card>
          <h4> TheLinuxQuiz </h4>
        </Card>
      </Grid>
      <Grid>
        <Button onClick={themeSwitcher}>Theme</Button>
      </Grid>
    </Grid.Container>
    <Divider />
  </header>
);

export default NavBar;
