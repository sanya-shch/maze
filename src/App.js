import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "../src/screens/Home";
import GamePage from "../src/screens/Game";

function App() {
  const [gameLevel, setGameLevel] = useState(1);
  const [playerSkin, setPlayerSkin] = useState("e1_96");
  const [mapPart, setMapPart] = useState({ row: 0, column: 0 });

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage
            gameLevel={gameLevel}
            setGameLevel={setGameLevel}
            playerSkin={playerSkin}
            setPlayerSkin={setPlayerSkin}
          />
        }
      />
      <Route
        path="/game"
        element={
          <GamePage
            gameLevel={gameLevel}
            playerSkin={playerSkin}
            mapPart={mapPart}
            setMapPart={setMapPart}
          />
        }
      />
    </Routes>
  );
}

export default App;
