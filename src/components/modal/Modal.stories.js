import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Button from "../button/ContainedButton";
import TextButton from "../button/TextButton";
import Modal from "./Modal";
import { ON_PRIMARY_BACKGROUND } from "../../constants/theme";
import Text from "../text/Text";

const TITLE = "A modal with title";
const DESCRIPTION = "Would you like to do something?";

storiesOf(`Modal`, module).add(`default`, () => {
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      {modalOpen && (
        <Modal
          title={TITLE}
          onClose={() => {
            setModalOpen(false);
          }}
          open={modalOpen}
        >
          <Text>{DESCRIPTION}</Text>
          <div
            style={{
              display: "flex",
              marginTop: "32px",
              justifyContent: "flex-end"
            }}
          >
            <TextButton
              backgroundColorHover={ON_PRIMARY_BACKGROUND}
              onClick={() => {
                setModalOpen(false);
                onConfirm();
              }}
            >
              Yes
            </TextButton>
            <TextButton
              backgroundColorHover={ON_PRIMARY_BACKGROUND}
              onClick={() => {
                setModalOpen(false);
                onDeny();
              }}
            >
              No
            </TextButton>
          </div>
        </Modal>
      )}
    </>
  );
});
