import React from "react";
import { Button, Fieldset, Grid, Text } from "@geist-ui/react";
import Question from "./components/Question";
import BoolQuestion from "./components/BoolQuestion";

const WorkstationQuiz = () => {
  const [windows, setWindows] = React.useState(1);
  const [experience, setExperience] = React.useState(1);
  const [ux, setUx] = React.useState(1);
  const [security, setSecurity] = React.useState(1);
  const [privacy, setPrivacy] = React.useState(1);
  const [stability, setStability] = React.useState(1);
  const [gaming, setGaming] = React.useState(false);
  const [customize, setCustomize] = React.useState(1);
  const [install, setInstall] = React.useState(1);
  const [community, setCommunity] = React.useState(1);

  const submit = () => {
    const quizState = {
      windows,
      experience,
      ux,
      security,
      privacy,
      stability,
      gaming,
      customize,
      install,
      community,
    };
    console.log(quizState);
  };

  const handleWindowsChange = (value) => {
    setWindows(value);
  };

  const handleExperienceChange = (value) => {
    setExperience(value);
  };

  const handleUXChange = (value) => {
    setUx(value);
  };

  const handleSecurityChange = (value) => {
    setSecurity(value);
  };

  const handlePrivacyChange = (value) => {
    setPrivacy(value);
  };

  const handleStabilityChange = (value) => {
    setStability(value);
  };

  const handleGamingChange = (value) => {
    setGaming(value);
  };

  const handleCustomizeChange = (value) => {
    setCustomize(value);
  };

  const handleInstallChange = (value) => {
    setInstall(value);
  };

  const handleCommunityChange = (value) => {
    setCommunity(value);
  };

  return (
    <Fieldset label="workstation">
      <Fieldset.Title>Workstation Use</Fieldset.Title>
      <Fieldset.Subtitle>
        <Text>
          <h5>All scales are from 1 to 10.</h5>
        </Text>
        <Grid.Container width="50rem" direction="column" gap={2}>
          <Grid>
            <Question onChange={handleWindowsChange}>
              How experienced are you with Microsoft&#39;s Windows?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleExperienceChange}>
              How experienced are you with Linux?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleUXChange}>
              How important is user experience to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleSecurityChange}>
              How important is security to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handlePrivacyChange}>
              How important is privacy to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleStabilityChange}>
              How important is stability to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleCustomizeChange}>
              How important is customizability to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleInstallChange}>
              How important is ease of installation to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleCommunityChange}>
              How important is a large community of similar users to you?
            </Question>
          </Grid>
          <Grid>
            <BoolQuestion onChange={handleGamingChange}>
              Do you use your computer for gaming?
            </BoolQuestion>
          </Grid>
        </Grid.Container>
      </Fieldset.Subtitle>
      <Fieldset.Footer>
        Submit The Quiz
        <Button auto onClick={submit}>
          Submit
        </Button>
      </Fieldset.Footer>
    </Fieldset>
  );
};

export default WorkstationQuiz;
