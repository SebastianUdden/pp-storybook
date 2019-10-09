import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Button } from "../src/index";

const TITLE = "This is a title";
const DESCRIPTION = "This is a description";

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
          <span>{DESCRIPTION}</span>
          <div
            style={{
              display: "flex",
              marginTop: "32px",
              justifyContent: "center"
            }}
          >
            <Button
              backgroundColor="#fff"
              onClick={() => {
                setModalOpen(false);
                onConfirm();
              }}
            >
              Yes
            </Button>
            <Button
              backgroundColor="#fff"
              onClick={() => {
                setModalOpen(false);
                onDeny();
              }}
            >
              No
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
});
