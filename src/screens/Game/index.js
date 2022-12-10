import React, { useContext } from "react";

import "./style.css";

import Player from "../../components/player";
import Map from "../../components/map";

import { GameContext } from "../../store";
import levelData from "../../data/levels/levels.json";

function Game({ playerSkin }) {
  const { tilesData, level } = useContext(GameContext);

  return (
    <div
      className="main-game-container"
      style={{
        minWidth:
          levelData[level].tileSize * levelData[level].tilesCount,
        minHeight:
          levelData[level].tileSize * levelData[level].tilesCount,
      }}
    >
      {tilesData ? (
        <div className="zone-container">
          <Player
            skin={playerSkin}
            mapPartCount={levelData[level].mapSize}
            tilesCount={levelData[level].tilesCount}
            spriteSize={levelData[level].tileSize}
          />

          <Map
            tiles={tilesData.tiles}
            tileset={levelData[level].tileset}
            size={{
              width:
                levelData[level].tileSize * levelData[level].tilesCount,
              height:
                levelData[level].tileSize * levelData[level].tilesCount,
            }}
          />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Game;
