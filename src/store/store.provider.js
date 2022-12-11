import React, { useState, useMemo, useEffect } from "react";

import { GameContext } from "./store.context.js";
import { getMapFile } from "../helpers/getMapFile";
import { getLSValue } from "../helpers/getLSValue";

import levelData from "../data/levels/levels.json";
import tilesSetsData from "../data/tilesets.json";

function GameProvider({ children }) {
  const [level, setLevel] = useState(getLSValue("level", "start"));
  const [mapPartRow, setMapPartRow] = useState(
    levelData[level].startTileRow || 0
  );
  const [mapPartColumn, setMapPartColumn] = useState(
    levelData[level].startTileColumn || 0
  );

  const [playerPositionX, setPlayerPositionX] = useState(
    levelData[level].playerStartPositionX || 0
  );
  const [playerPositionY, setPlayerPositionY] = useState(
    levelData[level].playerStartPositionY || 0
  );

  const [tilesData, setTilesData] = useState(null);

  const [tileSet, setTileSet] = useState(
    levelData[level].tileset || "tileset_96"
  );
  const [mapSize, setMapSize] = useState(levelData[level].mapSize);
  const [tilesCount, setTilesCount] = useState(levelData[level].tilesCount);
  const [tileSize, setTileSize] = useState(levelData[level].tileSize);

  const [impassableItems, setImpassableItems] = useState(
    tilesSetsData[levelData[level].tileset].impassableItems
  );

  const [dir, setDir] = useState(levelData[level].dir);
  const [step, setStep] = useState(levelData[level].step);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMapPartRow(levelData[level].startTileRow);
    setMapPartColumn(levelData[level].startTileColumn);

    setPlayerPositionX(levelData[level].playerStartPositionX);
    setPlayerPositionY(levelData[level].playerStartPositionY);

    setTileSet(levelData[level].tileset);

    setMapSize(levelData[level].mapSize);
    setTilesCount(levelData[level].tilesCount);
    setTileSize(levelData[level].tileSize);

    setImpassableItems(tilesSetsData[levelData[level].tileset].impassableItems);

    setDir(levelData[level].dir);
    setStep(levelData[level].step);

    setLoading(true);
  }, [level]);

  useEffect(() => {
    if (loading) {
      async function fetchData() {
        const file = await getMapFile(level, mapPartRow, mapPartColumn);

        setTilesData(file);
        setLoading(false);
      }

      fetchData();
    }
  }, [loading, mapPartRow, mapPartColumn]);

  const value = useMemo(
    () => ({
      tilesData,
      level,
      setLevel,
      mapPartRow,
      setMapPartRow,
      mapPartColumn,
      setMapPartColumn,

      tileSet,
      mapSize,
      tilesCount,
      tileSize,

      playerPositionX,
      setPlayerPositionX,
      playerPositionY,
      setPlayerPositionY,

      impassableItems,

      dir,
      setDir,
      step,
      setStep,

      loading,
      setLoading,
    }),
    [
      tilesData,
      level,
      mapPartRow,
      mapPartColumn,
      tileSet,
      mapSize,
      tilesCount,
      tileSize,
      playerPositionX,
      playerPositionY,
      impassableItems,
      dir,
      step,
      loading,
    ]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export default GameProvider;
