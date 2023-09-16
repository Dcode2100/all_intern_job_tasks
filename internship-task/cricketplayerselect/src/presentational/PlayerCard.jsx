import React, { useEffect } from "react";
import { CardButtonSection } from "../styles/mixins";
import { styled } from "styled-components";
import Button from "../components/Button";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  border: 2px solid black;
  border-radius: 0.5rem;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  background-color: #7abad0;
`;
const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 0.3rem;
  width: 100%;
  /* border: 2px solid red; */
`;
const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`;
const PlayerType = styled.div`
  font-size: 0.8rem;
`;
const PlayerPoints = styled.div`
  font-size: 0.8rem;
`;

const PlayerCard = ({
  player,
  setSelectedPlayers,
  headerTitle,
  handleUpdateAvailablePlayers 
}) => {
  const [editMode, setEditMode] = React.useState(false);
  const [editedPlayer, setEditedPlayer] = React.useState({ ...player });

  useEffect(() => {
    // Update the editedPlayer state when the player prop changes
    setEditedPlayer({ ...player });
  }, [player]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    handleUpdateAvailablePlayers (editedPlayer);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedPlayer((prevPlayer) => ({ ...prevPlayer, [name]: value }));
  };
  return (
    <CardContainer>
      <CardInfo>
        <CardHeader>
          {editMode ? (
            <input
              type="text"
              name="playerName"
              value={editedPlayer.playerName}
              onChange={handleChange}
            />
          ) : (
            player.playerName
          )}
        </CardHeader>
        <PlayerType>
          {editMode ? (
            <input
              type="text"
              name="playerPosition"
              value={editedPlayer.playerPosition}
              onChange={handleChange}
            />
          ) : (
            player.playerPosition
          )}
        </PlayerType>
        <PlayerPoints>
          {editMode ? (
            <input
              type="number"
              name="points"
              value={editedPlayer.points}
              onChange={handleChange}
            />
          ) : (
            player.points
          )}
        </PlayerPoints>
        {editMode && (
          <Button handleSaveClick={handleSaveClick} title={"Save"}></Button>
        )}
      </CardInfo>
      {headerTitle === "Available Players" && (
        <CardButtonSection>
          <Button
            setSelectedPlayers={setSelectedPlayers}
            player={player}
            editMode={editMode}
            title={"Add"}
          />
          <Button
            setSelectedPlayers={setSelectedPlayers}
            player={player}
            title={"Edit"}
            handleEditClick={handleEditClick}
          />
        </CardButtonSection>
      )}
      {headerTitle === "Selected Players" && (
        <CardButtonSection>
          <Button
            setSelectedPlayers={setSelectedPlayers}
            player={player}
            title={"Remove"}
          />
        </CardButtonSection>
      )}
    </CardContainer>
  );
};

export default PlayerCard;
