import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./style.css";

import Player from "../../components/Player";
import Map from "../../components/Map";

import { GameContext } from "../../store";
import levelData from "../../data/levels/levels.json";
import Loader from "../../components/Loader";
import { setLSValue } from "../../helpers/setLSValue";
import { LEVELS_LIST } from "../../constants";

function Game({ playerSkin }) {
  const navigate = useNavigate();
  const {
    tilesData,
    level,
    setLevel,
    loading,
    mapPartRow,
    mapPartColumn,
    playerPositionX,
    playerPositionY,
    playerFinishPositionX,
    playerFinishPositionY,
    finishTileRow,
    finishTileColumn,
    isFinish,
    setIsFinish,
  } = useContext(GameContext);

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (
      mapPartRow === finishTileRow &&
      mapPartColumn === finishTileColumn &&
      playerFinishPositionX === playerPositionX &&
      playerFinishPositionY === playerPositionY
    ) {
      if (!isFinish && count === 0) {
        setCount(5);
        setIsFinish(true);
      }

      if (isFinish && count === 0) {
        if (level !== LEVELS_LIST.at(-1)) {
          const index = LEVELS_LIST.findIndex((item) => item === level);
          setLSValue("level", LEVELS_LIST[index + 1]);
          setLevel(LEVELS_LIST[index + 1]);
        } else {
          setLSValue("level", "start");
          setLevel("start");
          navigate("/");
        }
      }
    }
  }, [
    mapPartRow,
    finishTileRow,
    mapPartColumn,
    finishTileColumn,
    playerFinishPositionX,
    playerPositionX,
    playerFinishPositionY,
    playerPositionY,
    isFinish,
    count,
  ]);

  React.useEffect(() => {
    const TimerInt =
      count > 0 &&
      setInterval(() => {
        setCount((cnt) => cnt - 1);
      }, 1000);

    return () => {
      clearInterval(TimerInt);
    };
  }, [count]);

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
            isCanWalk={count === 0}
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

      {isFinish && (
        <div className="confetti-container">
          <div className="confetti">
            <i
              style={{ "--speed": "10", "--bg": "yellow" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "white" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "29", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "17", "--bg": "blue" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "33", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "26", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "24", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "5", "--bg": "blue" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "40", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "17", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "25", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "15", "--bg": "yellow" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "32", "--bg": "yellow" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "25", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "37", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "37", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "36", "--bg": "white" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "32", "--bg": "green" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "32", "--bg": "yellow" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "29", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "30", "--bg": "pink" }}
              className="rectangle"
            />
            <i style={{ "--speed": "30", "--bg": "red" }} className="square" />
            <i
              style={{ "--speed": "18", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "19", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "16", "--bg": "blue" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "34", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "39", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "40", "--bg": "purple" }}
              className="square"
            />
            <i
              style={{ "--speed": "21", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "14", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "38", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "19", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "29", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "21", "--bg": "white" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "17", "--bg": "purple" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "32", "--bg": "yellow" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "48", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "38", "--bg": "pink" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "13", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "49", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "19", "--bg": "cyan" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "15", "--bg": "steelblue" }}
              className="square"
            />
            <i
              style={{ "--speed": "10", "--bg": "yellow" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "white" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "29", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "17", "--bg": "blue" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "33", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "26", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "24", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "5", "--bg": "white" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "40", "--bg": "purple" }}
              className="square"
            />
            <i
              style={{ "--speed": "17", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "25", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "15", "--bg": "cyan" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "32", "--bg": "yellow" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "45", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "37", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "26", "--bg": "white" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "32", "--bg": "cyan" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "32", "--bg": "yellow" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "45", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "50", "--bg": "pink" }}
              className="rectangle"
            />
            <i style={{ "--speed": "30", "--bg": "red" }} className="square" />
            <i
              style={{ "--speed": "18", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "19", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "16", "--bg": "blue" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "33", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "39", "--bg": "white" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "40", "--bg": "orange" }}
              className="square"
            />
            <i
              style={{ "--speed": "21", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "14", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "38", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "19", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "29", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "34", "--bg": "white" }}
              className="hexagram"
            />
            <i
              style={{ "--speed": "17", "--bg": "indigo" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "32", "--bg": "yellow" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "23", "--bg": "white" }}
              className="square"
            />
            <i
              style={{ "--speed": "18", "--bg": "green" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "37", "--bg": "red" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "48", "--bg": "pink" }}
              className="wavy-line"
            />
            <i
              style={{ "--speed": "38", "--bg": "pink" }}
              className="rectangle"
            />
            <i
              style={{ "--speed": "13", "--bg": "red" }}
              className="pentagram"
            />
            <i
              style={{ "--speed": "49", "--bg": "yellow" }}
              className="dodecagram"
            />
            <i
              style={{ "--speed": "19", "--bg": "purple" }}
              className="wavy-line"
            />
            <i style={{ "--speed": "15", "--bg": "cyan" }} className="square" />
          </div>
        </div>
      )}

      {isFinish && (
        <div className="finish-text">
          Congratulations!!!{" "}
          {level !== LEVELS_LIST.at(-1)
            ? `Next level in ${count}.`
            : `To the main one in ${count}.`}
        </div>
      )}
    </div>
  );
}

export default Game;
