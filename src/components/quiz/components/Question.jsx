import React from "react";
import { Card, Divider, Text, Slider } from "@geist-ui/react";

const Question = (props) => (
  <Card width="100%">
    <Text>
      <h4>{props.children}</h4>
    </Text>
    <Divider y={0} />
    <Slider
      onChange={props.onChange}
      min={1}
      max={10}
      step={1}
      initialValue={1}
    />
  </Card>
);

export default Question;
