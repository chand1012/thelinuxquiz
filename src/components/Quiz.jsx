import { Fieldset } from "@geist-ui/react";
import React, { useState } from "react";

import DistroGrid from "./DistroGrid";
import DistroModal from "./DistroModal";
import HomeQuiz from "./quiz/Home";
import ServerQuiz from "./quiz/Server";
import WorkstationQuiz from "./quiz/Workstation";

const Quiz = () => {
  const [fieldValue, setFieldValue] = useState("home");
  const [isResultsOpen, setResultsOpen] = useState(false);

  const handleFieldChange = (value) => {
    setFieldValue(value);
  };

  const openModal = () => {
    setResultsOpen(true);
  };

  const closeModal = () => {
    setResultsOpen(false);
  };

  return (
    <Fieldset.Group value={fieldValue} onChange={handleFieldChange}>
      <HomeQuiz handleSubmit={openModal} />
      <WorkstationQuiz />
      <ServerQuiz />
      <DistroGrid />
      <DistroModal
        distro={"arch"}
        closeModal={closeModal}
        visible={isResultsOpen}
      />
    </Fieldset.Group>
  );
};

export default Quiz;
