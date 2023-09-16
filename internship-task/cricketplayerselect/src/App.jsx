import React from "react";
import PlayerSelectionPage from "./pages/PlayerSelectionPage";
import { GlobalStyle } from "./styles/GlobalStyle";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PlayerSelectionPage />
    </>
  );
}