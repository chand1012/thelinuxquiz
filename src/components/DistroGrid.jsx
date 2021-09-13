import React from "react";
import { Fieldset, Grid } from "@geist-ui/react";

import DistroCard from "./DistroCard";
import { allLinuxDistros } from "../utility/ratings";

const DistroGrid = () => {
  const GetAllDistroCards = () => {
    return Object.keys(allLinuxDistros).map((key) => {
      return (
        <Grid key={key}>
          <DistroCard distro={key} />
        </Grid>
      );
    });
  };

  return (
    <Fieldset label="distros">
      <Grid.Container gap={2} justify="center">
        <GetAllDistroCards />
      </Grid.Container>
    </Fieldset>
  );
};

export default DistroGrid;
