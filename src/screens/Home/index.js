import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import { GameContext } from "../../store";
import Player from "../../components/Player";
import levelData from "../../data/levels/levels";
import Map from "../../components/Map";
import useKeyPress from "../../hooks/use-key-press";
import { SKINS_LIST } from "../../constants";
import Loader from "../../components/Loader";

const Text = ({ value }) => (
  <div className="text">
    {value.split("").map((char, i) => (
      <div key={i} className="letter" style={{ "--delay": `${i * 0.2}s` }}>
        <span className="source">{char}</span>
        <span className="shadow">{char}</span>
        <span className="overlay">{char}</span>
      </div>
    ))}
  </div>
);

function Home({ playerSkin, setPlayerSkin }) {
  const navigate = useNavigate();
  const { tilesData, level, setLevel } = useContext(GameContext);

  useKeyPress((e) => {
    if (e.key === "Enter") {
      setLevel(1);

      navigate("/game");
    } else if (e.key === " ") {
      const index = SKINS_LIST.findIndex((item) => item === playerSkin);

      setPlayerSkin(
        SKINS_LIST[index + 1 === SKINS_LIST.length ? 0 : index + 1]
      );
    }

    e.preventDefault();
  });

  return (
    <div className="main-home-container">
      <div className="title-block">
        <Text value="The" />
        <Text value="MAZE" />
        <Text value="Game" />
      </div>
      {tilesData ? (
        <div
          className="start-zone-container"
          style={{
            width: levelData[level].tileSize * levelData[level].tilesCount,
            height: levelData[level].tileSize * levelData[level].tilesCount,
          }}
        >
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
      ) : (
        <div
          style={{
            width: levelData[level].tileSize * levelData[level].tilesCount,
            height: levelData[level].tileSize * levelData[level].tilesCount,
          }}
        >
          <Loader />
        </div>
      )}

      <div className="info">
        Press SPACE to change skin | Press ENTER to start
      </div>
    </div>
  );
}

export default Home;
