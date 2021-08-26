import React from "react";
import { Button, Fieldset, Grid } from "@geist-ui/react";
import Question from "./components/Question";

const HomeQuiz = () => {
  const [quizState, setQuizState] = React.useState({
    usability: 5,
    security: 5,
  });

  const submit = () => {
    console.log(quizState);
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

  return (
    <Fieldset label="home">
      <Fieldset.Title>Home Use</Fieldset.Title>
      <Fieldset.Subtitle>
        <Grid.Container>
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
