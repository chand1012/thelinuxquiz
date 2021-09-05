import React from "react";
import { Button, Fieldset, Grid, Text } from "@geist-ui/react";
import Question from "./components/Question";
const ServerQuiz = () => {
  const [windows, setWindows] = React.useState(1);
  const [experience, setExperience] = React.useState(1);
  const [security, setSecurity] = React.useState(1);
  const [privacy, setPrivacy] = React.useState(1);
  const [stability, setStability] = React.useState(1);
  const [install, setInstall] = React.useState(1);
  const [community, setCommunity] = React.useState(1);

  const submit = () => {
    const quizState = {
      windows,
      experience,
      security,
      privacy,
      stability,
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

  const handleSecurityChange = (value) => {
    setSecurity(value);
  };

  const handlePrivacyChange = (value) => {
    setPrivacy(value);
  };

  const handleStabilityChange = (value) => {
    setStability(value);
  };

  const handleInstallChange = (value) => {
    setInstall(value);
  };

  const handleCommunityChange = (value) => {
    setCommunity(value);
  };

  return (
    <Fieldset label="server">
      <Fieldset.Title>Server Use</Fieldset.Title>
      <Fieldset.Subtitle>
        <Text>
          <h5>WIP does not yet work!</h5>
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
            <Question onChange={handleInstallChange}>
              How important is ease of installation to you?
            </Question>
          </Grid>
          <Grid>
            <Question onChange={handleCommunityChange}>
              How important is a large community of similar users to you?
            </Question>
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

export default ServerQuiz;
