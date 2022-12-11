import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import Player from "../../components/Player";
import Map from "../../components/Map";

import { GameContext } from "../../store";
import levelData from "../../data/levels/levels.json";
import Loader from "../../components/Loader";
import { setLSValue } from "../../helpers/setLSValue";

function Game({ playerSkin }) {
  const navigate = useNavigate();
  const { tilesData, level, setLevel, loading } = useContext(GameContext);

  const handleClickTitle = () => {
    setLSValue("level", "start");
    setLevel("start");
    navigate("/");
  };

  return (
    <div className="main-game-container">
      <button className="title" onClick={handleClickTitle}>
        The MAZE Game
      </button>

      {loading || !tilesData?.tiles?.length ? (
        <div
          style={{
            width: levelData[level].tileSize * levelData[level].tilesCount,
            height: levelData[level].tileSize * levelData[level].tilesCount,
          }}
        >
          <Loader isFullScreen={false} />
        </div>
      ) : (
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
              width: levelData[level].tileSize * levelData[level].tilesCount,
              height: levelData[level].tileSize * levelData[level].tilesCount,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Game;
