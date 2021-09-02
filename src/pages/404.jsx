import React from "react";

import { Grid, Text } from "@geist-ui/react";

const NotFound = () => {
  return (
    <Grid.Container justify="center">
      <Grid>
        <Text h1>404: Page not found.</Text>
      </Grid>
    </Grid.Container>
  );
};

export default NotFound;
