import { Fieldset, Grid } from "@geist-ui/react";
import React, { useState } from "react";

import distroCompare from "../utility/compare";
import { desktopLinuxDistros, serverLinuxDistros } from "../utility/ratings";

import DistroModal from "../components/DistroModal";
import HomeQuiz from "../components/quiz/Home";
import ServerQuiz from "../components/quiz/Server";

const Page = () => {
  const [fieldValue, setFieldValue] = useState("desktop");
  const [isResultsOpen, setResultsOpen] = useState(false);
  const [distro, setDistro] = useState("ubuntu");

  const handleFieldChange = (value) => {
    setFieldValue(value);
  };

  const openModal = () => {
    setResultsOpen(true);
  };

  const closeModal = () => {
    setResultsOpen(false);
  };

  const handleSubmit = (quizState) => {
    const distroSets = {
      desktop: desktopLinuxDistros,
      server: serverLinuxDistros,
    };

    const result = distroCompare(quizState, distroSets[fieldValue]);
    setDistro(result);
    openModal();
  };

  return (
    <Grid.Container justify="center">
      <Fieldset.Group value={fieldValue} onChange={handleFieldChange}>
        <HomeQuiz handleSubmit={handleSubmit} />
        <ServerQuiz handleSubmit={handleSubmit} />
        <DistroModal
          distro={distro}
          closeModal={closeModal}
          visible={isResultsOpen}
        />
      </Fieldset.Group>
    </Grid.Container>
  );
};

export default Page;
