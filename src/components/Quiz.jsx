import { Fieldset } from "@geist-ui/react";
import React, { useState } from "react";

import HomeQuiz from "./quiz/Home";

const Quiz = () => {
  const [fieldValue, setFieldValue] = useState("home");

  const handleFieldChange = (value) => {
    setFieldValue(value);
  };

  return (
    <Fieldset.Group value={fieldValue} onChange={handleFieldChange}>
      <HomeQuiz />
    </Fieldset.Group>
  );
};

export default Quiz;
