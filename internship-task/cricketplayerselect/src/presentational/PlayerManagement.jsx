import React from "react";
import { ContainerChild, Header, PlayerContainer } from "../styles";
import PlayerCard from "./PlayerCard";

const PlayerManagement = ({ players, headerTitle,setSelectedPlayers, handleUpdateAvailablePlayers }) => {
  return (
    <ContainerChild>
      {headerTitle && <Header>{headerTitle}</Header>}

      <PlayerContainer>
        {players.map((player) => {
          return (
            <PlayerCard
              headerTitle={headerTitle}
              key={player.id}
              player={player}
              handleUpdateAvailablePlayers={handleUpdateAvailablePlayers}
              setSelectedPlayers={setSelectedPlayers}
            />
          );
        })}
      </PlayerContainer>
    </ContainerChild>
  );
};

export default PlayerManagement;
