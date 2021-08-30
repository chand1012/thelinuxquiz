import { Fieldset, Grid } from "@geist-ui/react";
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
    <Grid.Container justify="center">
      <Fieldset.Group
        style={{ maxWidth: "75%" }}
        value={fieldValue}
        onChange={handleFieldChange}
      >
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
    </Grid.Container>
  );
};

export default Quiz;
