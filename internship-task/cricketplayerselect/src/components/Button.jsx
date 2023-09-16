import React from "react";
import { CardButton } from "../styles/mixins";
import { styled } from "styled-components";

const Button = ({
  title,
  setSelectedPlayers,
  player,
  handleEditClick,
  handleSaveClick,
  editMode,
}) => {
  const StyledCardButton = styled(CardButton)`
    background-color: ${title === "Add" && editMode ? "#73939d" : " #f5f5f5"};
    pointer-events: ${title === "Add" && editMode ? "none" : "auto"};
  `;

  const handleClick = () => {
    if (title === "Add") {
      setSelectedPlayers((prevPlayers) => [...prevPlayers, player]);
    }
    if (title === "Edit") {
      handleEditClick();
    }
    if (title === "Remove") {
      setSelectedPlayers((prevPlayers) =>
        prevPlayers.filter((p) => p.id !== player.id)
      );
    }
    if (title === "Save") {
      handleSaveClick();
    }
  };
  return (
    <>
      {title && (
        <StyledCardButton onClick={handleClick}>{title}</StyledCardButton>
      )}
    </>
  );
};

export default Button;
