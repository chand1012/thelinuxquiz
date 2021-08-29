import React from "react";
import { Modal } from "@geist-ui/react";
import DistroCard from "./DistroCard";

// this will be the modal
// that shows the results of the
// quix
const DistroModal = (props) => {
  return (
    <Modal visible={props.visible}>
      <Modal.Title>The Linux Quiz</Modal.Title>
      <Modal.Subtitle>Here are your recommendations!</Modal.Subtitle>
      <Modal.Content>
        <DistroCard distro={props.distro} />
      </Modal.Content>
      <Modal.Action onClick={props.closeModal}>Close</Modal.Action>
      <Modal.Action onClick={props.share}>Share</Modal.Action>
    </Modal>
  );
};

export default DistroModal;
