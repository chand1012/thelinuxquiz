import React from "react";
import { Card, Grid, Link, Text } from "@geist-ui/react";
import * as Ratings from "../utility/ratings";

const DistroCard = ({ distro }) => {
  const SelectedDistro = Ratings[distro];

  return (
    <Card hoverable>
      <SelectedDistro.Icon size={128} />
      <Grid.Container justify="center">
        <Grid>
          <Text h4>{SelectedDistro.displayName}</Text>
        </Grid>
      </Grid.Container>

      <Card.Footer>
        <Link block href={SelectedDistro.url} target="_blank">
          Download {SelectedDistro.displayName}
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default DistroCard;
