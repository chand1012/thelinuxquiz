import React from "react";

import { Grid } from "@geist-ui/react";

import DistroGrid from "../components/DistroGrid";

const DistroPage = () => {
  return (
    <Grid.Container justify="center">
      <Grid>
        <DistroGrid />
      </Grid>
    </Grid.Container>
  );
};

export default DistroPage;
