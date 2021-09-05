import React from "react";
import {
  Card,
  Divider,
  Grid,
  Slider,
  Spacer,
  Text,
  Tooltip,
} from "@geist-ui/react";
import { QuestionCircle } from "@geist-ui/react-icons";

const Question = (props) => {
  if (props?.tooltip) {
    return (
      <Card width="100%">
        <Text>
          <h4>
            {props.children}
            <Tooltip style={{ marginLeft: "6px" }} text={props.tooltip}>
              <QuestionCircle size={18} />
            </Tooltip>
          </h4>
        </Text>
        <Divider y={0} />
        <Slider
          showMarkers
          onChange={props.onChange}
          min={1}
          max={5}
          step={1}
          initialValue={1}
        />
        <Spacer h={1} />
        <Grid.Container justify="space-between">
          <Grid>
            <Text h6>Least</Text>
          </Grid>
          <Grid>
            <Text h6>Most</Text>
          </Grid>
        </Grid.Container>
      </Card>
    );
  }

  return (
    <Card width="100%">
      <Text>
        <h4>{props.children}</h4>
      </Text>
      <Divider y={0} />
      <Slider
        showMarkers
        onChange={props.onChange}
        min={1}
        max={5}
        step={1}
        initialValue={1}
      />
      <Spacer h={1} />
      <Grid.Container justify="space-between">
        <Grid>
          <Text h6>Least</Text>
        </Grid>
        <Grid>
          <Text h6>Most</Text>
        </Grid>
      </Grid.Container>
    </Card>
  );
};

export default Question;
