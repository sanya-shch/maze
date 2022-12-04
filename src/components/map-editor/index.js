import React, { useState, useEffect } from "react";

import TilePalette from "../tile-palette";
import Map from "../map";

import useDraggable from "../../hooks/use-draggable";

import { SIZE } from "../../constants";
import levelData from "../../data/levels/levels.json";

const MAP_PART = { row: 0, column: 0 };
const level = 1;

export default function Editor() {
  // const levelData = require(`../../data/levels/level_${level}.json`);
  const tilesData = require(`../../data/levels/level_${level}/part_${MAP_PART.row}_${MAP_PART.column}.json`);

  const { position } = useDraggable("handle");

  const [activeTile, setActiveTile] = useState({ x: 2 * SIZE, y: 4 * SIZE });
  const [tiles, setTiles] = useState(tilesData?.tiles || []);
  const [mapSize, setMapSize] = useState({
    width: levelData[level].size * levelData[level].tilesCount,
    height: levelData[level].size * levelData[level].tilesCount,
  });
  const [bgLayer, setBgLayer] = useState(false);
  const [isErase, setIsErase] = useState(false);

  useEffect(() => {
    if (!tiles.length) {
      const _tiles = [];
      let id = 0;

      for (let y = 0; y < mapSize.height; y = y + SIZE) {
        const row = [];
        for (let x = 0; x < mapSize.width; x = x + SIZE) {
          row.push({
            x,
            y,
            id: id++,
            v: { x: -SIZE, y: -SIZE },
            v_bg: { x: -SIZE, y: -SIZE },
          });
        }
        _tiles.push(row);
      }
      setTiles(_tiles);
    }
  }, []);

  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify({ tiles })
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `part_${MAP_PART.row}_${MAP_PART.column}.json`;

    link.click();
  };

  function cloneMatrix(m) {
    const clone = new Array(m.length);

    for (let i = 0; i < m.length; ++i) {
      clone[i] = m[i].slice(0);
    }
    return clone;
  }
  function dropTile({ x, y }) {
    setTiles((prev) => {
      const clone = cloneMatrix(prev);

      if (bgLayer) {
        if (isErase) {
          clone[y][x] = {
            ...clone[y][x],
            v_bg: undefined,
          };
        } else {
          clone[y][x] = {
            ...clone[y][x],
            v_bg: activeTile,
          };
        }
      } else {
        if (isErase) {
          clone[y][x] = {
            ...clone[y][x],
            v: undefined,
          };
        } else {
          clone[y][x] = {
            ...clone[y][x],
            v: activeTile,
          };
        }
      }

      return clone;
    });
  }

  return (
    <div
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "grey",
        overflow: "hidden",
      }}
    >
      <TilePalette
        position={position}
        tileset={levelData[level].tileset}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        setBgLayer={setBgLayer}
        bgLayer={bgLayer}
        exportData={exportData}
        isErase={isErase}
        setIsErase={setIsErase}
      />

      <Map
        tiles={tiles}
        tileset={levelData[level].tileset}
        size={mapSize}
        dropTile={dropTile}
      />
    </div>
  );
}
