import React from "react";
import { Card, Text, Slider, Spacer } from "@geist-ui/react";

const Question = (props) => (
  <Card width="100%">
    <Text>
      <h4>{props.children}</h4>
    </Text>
    <Spacer />
    <Slider
      onChange={props.onChange}
      min={1}
      max={10}
      step={1}
      initialValue={5}
    />
  </Card>
);

export default Question;
