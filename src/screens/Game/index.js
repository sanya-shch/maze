import React, { useContext } from "react";

import "./style.css";

import Player from "../../components/player";
import Map from "../../components/map";

import { Context } from "../../store";
import levelData from "../../data/levels/levels.json";

function Game({ gameLevel, playerSkin }) {
  const { tilesData } = useContext(Context);

  return tilesData ? (
    <div className="zone-container">
      <Player
        skin={playerSkin}
        mapPartCount={levelData[gameLevel].mapSize}
        tilesCount={levelData[gameLevel].tilesCount}
        spriteSize={levelData[gameLevel].tileSize}
      />

      <Map
        tiles={tilesData.tiles}
        tileset={levelData[gameLevel].tileset}
        size={{
          width:
            levelData[gameLevel].tileSize * levelData[gameLevel].tilesCount,
          height:
            levelData[gameLevel].tileSize * levelData[gameLevel].tilesCount,
        }}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
}

export default Game;
