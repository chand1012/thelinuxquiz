import React from "react";
import { Button, Fieldset, Grid, Text } from "@geist-ui/react";
import Question from "./components/Question";
import BoolQuestion from "./components/BoolQuestion";

const HomeQuiz = () => {
  const [quizState, setQuizState] = React.useState({
    ux: 5,
    security: 5,
    privacy: 5,
    experience: 5,
    stability: 5,
    community: 5,
    windows: 5,
    games: false,
  });

  const submit = () => {
    console.log(quizState);
  };

  const handleExperienceChange = (value) => {
    setQuizState({
      ...quizState,
      experience: value,
    });
  };

  const handleUXChange = (value) => {
    setQuizState({
      ...quizState,
      ux: value,
    });
  };

  const handleSecurityChange = (value) => {
    setQuizState({
      ...quizState,
      security: value,
    });
  };

  const handlePrivacyChange = (value) => {
    setQuizState({
      ...quizState,
      privacy: value,
    });
  };

  const handleStabilityChange = (value) => {
    setQuizState({
      ...quizState,
      stability: value,
    });
  };

  const handleGamingChange = (value) => {
    setQuizState({
      ...quizState,
      games: value,
    });
  };

  return (
    <Fieldset label="home">
      <Fieldset.Title>Home Use</Fieldset.Title>
      <Fieldset.Subtitle>
        <Text>
          <h5>All scales are from 1 to 10.</h5>
        </Text>
        <Grid.Container gap={2}>
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

export default HomeQuiz;
