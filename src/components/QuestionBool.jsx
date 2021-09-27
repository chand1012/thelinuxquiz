import React from "react";
import { Card, Text, Radio, Divider, Spacer, Tooltip } from "@geist-ui/react";
import { QuestionCircle } from "@geist-ui/react-icons";

const BoolQuestion = (props) => {
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
        <Spacer h={1} />
        <Radio.Group value={props.value} onChange={props.onChange}>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </Card>
    );
  }

  return (
    <Card width="100%">
      <Text>
        <h4>{props.children}</h4>
      </Text>
      <Divider y={0} />
      <Spacer h={1} />
      <Radio.Group value={props.value} onChange={props.onChange}>
        <Radio value={1}>Yes</Radio>
        <Radio value={0}>No</Radio>
      </Radio.Group>
    </Card>
  );
};

export default BoolQuestion;
