import React from "react";
import { Button, Fieldset, Grid, Text } from "@geist-ui/react";
import Question from "./components/Question";

const HomeQuiz = () => {
  const [quizState, setQuizState] = React.useState({
    usability: 5,
    security: 5,
    privacy: 5,
    experience: 5,
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

  const handleUsabilityChange = (value) => {
    setQuizState({
      ...quizState,
      usability: value,
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
            <Question onChange={handleUsabilityChange}>
              How important is usability to you?
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
