import React from "react";

import "./style.css";

import Player from "../../components/player";
import Map from "../../components/map";

function Game({ gameLevel, playerSkin, mapPart, setMapPart }) {
  const levelData = require(`../../data/levels/level_${gameLevel}.json`);
  const tilesData = require(`../../data/levels/level_${gameLevel}/part_${mapPart.row}_${mapPart.column}.json`);

  return (
    <div className="zone-container">
      <Player skin={playerSkin} />

      <Map
        tiles={tilesData.tiles}
        tileset={levelData.tileset}
        size={{
          width: levelData.size * 7,
          height: levelData.size * 7,
        }}
      />
    </div>
  );
}

export default Game;
