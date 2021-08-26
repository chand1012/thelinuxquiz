import React from "react";
import { Card, Text, Radio, Divider } from "@geist-ui/react";

const BoolQuestion = (props) => (
  <Card width="100%">
    <Text>
      <h4>{props.children}</h4>
    </Text>
    <Divider y={0} />
    <Radio.Group onChange={props.onChange}>
      <Radio value={true}>Yes</Radio>
      <Radio value={false}>No</Radio>
    </Radio.Group>
  </Card>
);

export default BoolQuestion;
