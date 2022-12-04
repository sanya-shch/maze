import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import HomePage from "../src/screens/Home";
import GamePage from "../src/screens/Game";

function App() {
  const [gameLevel, setGameLevel] = useState(1);
  const [playerSkin, setPlayerSkin] = useState("m1_96");

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
        element={<GamePage gameLevel={gameLevel} playerSkin={playerSkin} />}
      />
    </Routes>
  );
}

export default App;
