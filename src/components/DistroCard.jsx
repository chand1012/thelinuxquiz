import React from "react";
import { Card, Grid, Link, Text } from "@geist-ui/react";
import { allLinuxDistros } from "../utility/ratings";

import DistroIcon from "./DistroIcons";

const DistroCard = ({ distro }) => {
  const SelectedDistro = allLinuxDistros[distro];

  return (
    <Card hoverable>
      <DistroIcon name={distro} size={128} />
      <Grid.Container justify="center">
        <Grid>
          <Text h4>{SelectedDistro.displayName}</Text>
        </Grid>
      </Grid.Container>

      <Card.Footer>
        <Grid.Container justify="center">
          <Grid>
            <Link
              marginLeft={0.47} // needed this to center the text for some reason
              block
              href={SelectedDistro.url}
              target="_blank"
            >
              Download {SelectedDistro.displayName}
            </Link>
          </Grid>
        </Grid.Container>
      </Card.Footer>
    </Card>
  );
};

export default DistroCard;
