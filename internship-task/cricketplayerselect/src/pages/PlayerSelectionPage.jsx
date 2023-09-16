import React from "react";
import { Container } from "../styles";
import PlayerManagement from "../presentational/PlayerManagement";

const players = [
  { id: 1, playerName: "Player1", playerPosition: "bowling", points: 44 },
  { id: 2, playerName: "Player2", playerPosition: "batting", points: 33 },
  { id: 3, playerName: "Player3", playerPosition: "bowling", points: 22 },
  { id: 4, playerName: "Player4", playerPosition: "batting", points: 11 },
  { id: 5, playerName: "Player5", playerPosition: "wicketKeeper", points: 55 },
  { id: 6, playerName: "Player6", playerPosition: "batting", points: 66 },
  { id: 7, playerName: "Player7", playerPosition: "bowling", points: 77 },
  { id: 8, playerName: "Player8", playerPosition: "bowling", points: 88 },
];

const PlayerSelectionPage = () => {
  const [selectedPlayers, setSelectedPlayers] = React.useState([]);
  const [availablePlayers, setAvailablePlayers] = React.useState(players);

  const handleUpdateAvailablePlayers = (updatedPlayer) => {
    setAvailablePlayers((prevPlayers) =>
      prevPlayers.map((p) => (p.id === updatedPlayer.id ? updatedPlayer : p))
    );
  };

  return (
    <Container>
      <PlayerManagement
        headerTitle={"Available Players"}
        players={availablePlayers}
        setSelectedPlayers={setSelectedPlayers}
        setAvailablePlayers={setAvailablePlayers}
        handleUpdateAvailablePlayers={handleUpdateAvailablePlayers}
      />
      <PlayerManagement
        headerTitle={"Selected Players"}
        players={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      />
    </Container>
  );
};

export default PlayerSelectionPage;
