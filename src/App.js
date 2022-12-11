import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../src/screens/Home";
import GamePage from "../src/screens/Game";
import { getLSValue } from "./helpers/getLSValue";

function App() {
  const [playerSkin, setPlayerSkin] = useState(
    getLSValue("playerSkin", "m1_96")
  );

  return (
    <Routes>
      <Route
        index
        element={
          <HomePage playerSkin={playerSkin} setPlayerSkin={setPlayerSkin} />
        }
      />
      <Route path="/game" element={<GamePage playerSkin={playerSkin} />} />
    </Routes>
  );
}

export default App;
