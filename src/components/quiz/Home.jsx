import React, { useState } from "react";
import { Button, Fieldset, Grid } from "@geist-ui/react";
import Question from "../Question";
import BoolQuestion from "../QuestionBool";

const HomeQuiz = ({ handleSubmit }) => {
  const [windows, setWindows] = useState(1);
  const [experience, setExperience] = useState(1);
  const [ux, setUx] = useState(1);
  const [security, setSecurity] = useState(1);
  const [privacy, setPrivacy] = useState(1);
  const [stability, setStability] = useState(1);
  const [gaming, setGaming] = useState(1);
  const [customize, setCustomize] = useState(1);
  const [install, setInstall] = useState(1);
  const [community, setCommunity] = useState(1);

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
    handleSubmit(quizState);
  };

  const reset = () => {
    console.log("reset");
    setWindows(1);
    setExperience(1);
    setUx(1);
    setSecurity(1);
    setPrivacy(1);
    setStability(1);
    setGaming(1);
    setCustomize(1);
    setInstall(1);
    setCommunity(1);
  };

  const windowsTooltip =
    "This question specifically refers to general functions such as creating/deleting files, modifying settings, and competent use of the Windows operating system.";
  const linuxTooltip =
    "This question targets general Linux experience such as basic navigation, installing packages through the included store or command-line package manager, modifying settings, etc. It also covers basic knowledge about parts of the linux operating system such as what a desktop environment, terminal, or package is.";
  const uxTooltip =
    "This question refers to how important the ease of use of your operating system. For example, MS-DOS (command-line only) would be a 1, not very intuitive. An iPhone would be an 5.";
  const securityTooltip =
    "This question pertains to the general security features of the operating system such as disk encryption, password managers, and virtualization. Your grandma's passwords would be a zero, and a 4096 character encryption key would be a 5.";
  const privacyTooltip =
    "This question pertains to the general privacy features of the operating system such as telemetry, advertisement tracking, and disk encryption. Facebook would be a 1 and printer from 2004 would be a 5.";
  const stabilityTooltip =
    "This question pertains to the general stability features of the operating system such as security updates and long term support. A 1 would be the most unstable, with 5 being a rock solid system.";
  const customizeTooltip =
    "This question pertains to the general customization features of the operating system such as themes, fonts, and language packs. A 1 would be the least customizable, with 5 being a fully custom system.";
  const installTooltip =
    "This question pertains to how easy the operating system is to install. 1 would mean its preinstalled, 5 would mean you custom compile from source and manually install the files yourself.";
  const communityTooltip =
    "This question pertains to things like the user forum for a particular operating system. 1 would be a system with no community features or help at all, and 5 would be a densely populated forum with almost any answer you need. ";

  return (
    <Fieldset label="desktop">
      <Fieldset.Title>Desktop Use</Fieldset.Title>
      <Fieldset.Subtitle>
        <Grid.Container width="50rem" direction="column" gap={2}>
          <Grid>
            <Question tooltip={windowsTooltip} value={windows} onChange={setWindows}>
              How experienced are you with Microsoft&#39;s Windows?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={linuxTooltip} value={experience} onChange={setExperience}>
              How experienced are you with Linux?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={uxTooltip} value={ux} onChange={setUx}>
              How important is user experience to you?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={securityTooltip} value={security} onChange={setSecurity}>
              How important is security to you?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={privacyTooltip} value={privacy} onChange={setPrivacy}>
              How important is privacy to you?
            </Question>
          </Grid>
          <Grid>
            <Question
              tooltip={stabilityTooltip}
              value={stability}
              onChange={setStability}
            >
              How important is stability to you?
            </Question>
          </Grid>
          <Grid>
            <Question
              tooltip={customizeTooltip}
              value={customize}
              onChange={setCustomize}
            >
              How important is customizability to you?
            </Question>
          </Grid>
          <Grid>
            <Question tooltip={installTooltip} value={install} onChange={setInstall}>
              How important is ease of installation to you?
            </Question>
          </Grid>
          <Grid>
            <Question
              tooltip={communityTooltip}
              value={community}
              onChange={setCommunity}
            >
              How important is a large community of similar users to you?
            </Question>
          </Grid>
          <Grid>
            <BoolQuestion value={gaming} onChange={setGaming}>
              Do you use your computer for gaming?
            </BoolQuestion>
          </Grid>
        </Grid.Container>
      </Fieldset.Subtitle>
      <Fieldset.Footer>
        Submit The Quiz
        <Button auto ghost onClick={submit}>
          Submit
        </Button>
        <Button auto ghost type="error" onClick={reset}>
          Reset
        </Button>
      </Fieldset.Footer>
    </Fieldset>
  );
};

export default HomeQuiz;
