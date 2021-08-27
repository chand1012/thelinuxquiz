import { Fieldset } from "@geist-ui/react";
import React, { useState } from "react";

import HomeQuiz from "./quiz/Home";
import ServerQuiz from "./quiz/Server";
import WorkstationQuiz from "./quiz/Workstation";

const Quiz = () => {
  const [fieldValue, setFieldValue] = useState("home");

  const handleFieldChange = (value) => {
    setFieldValue(value);
  };

  return (
    <Fieldset.Group value={fieldValue} onChange={handleFieldChange}>
      <HomeQuiz />
      <WorkstationQuiz />
      <ServerQuiz />
    </Fieldset.Group>
  );
};

export default Quiz;
