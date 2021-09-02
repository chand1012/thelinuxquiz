import { Fieldset, Grid } from "@geist-ui/react";
import React, { useState } from "react";

// import DistroGrid from "./DistroGrid";
import DistroModal from "../components/DistroModal";
import HomeQuiz from "../components/quiz/Home";
import ServerQuiz from "../components/quiz/Server";
import WorkstationQuiz from "../components/quiz/Workstation";

const Page = () => {
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
      <Fieldset.Group value={fieldValue} onChange={handleFieldChange}>
        <HomeQuiz handleSubmit={openModal} />
        <WorkstationQuiz />
        <ServerQuiz />
        <DistroModal
          distro={"arch"}
          closeModal={closeModal}
          visible={isResultsOpen}
        />
      </Fieldset.Group>
    </Grid.Container>
  );
};

export default Page;
