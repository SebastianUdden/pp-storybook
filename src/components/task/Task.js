import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  list-style: none;
  display: flex;
`;

const CheckboxLabel = styled.label``;
const Checkbox = styled.input``;
const CheckboxSpan = styled.span``;

const Title = styled.div``;
const TitleInput = styled.input``;

const Actions = styled.div``;

const Star = styled.a``;
const StarIcon = styled.span``;

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <ListItem state={state}>
      <CheckboxLabel>
        <Checkbox
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <CheckboxSpan onClick={() => onArchiveTask(id)} />
      </CheckboxLabel>
      <Title>
        <TitleInput
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </Title>

      <Actions onClick={event => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          <Star onClick={() => onPinTask(id)}>
            <StarIcon />
          </Star>
        )}
      </Actions>
    </ListItem>
  );
}
