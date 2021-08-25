import React from "react";
import { Grid } from "@geist-ui/react";
import { Card } from "@geist-ui/react";

const NavBar = () => (
  //   Grid container
  <Grid.Container gap={2} justify="center" height="100px">
    <Grid xs={6}>
      <Card shadow width="100%" />
    </Grid>
    <Grid xs={6}>
      <Card shadow width="100%" />
    </Grid>
    <Grid xs={6}>
      <Card shadow width="100%" />
    </Grid>
  </Grid.Container>
);

export default NavBar;
