import React, { useState, useEffect } from "react";

import TilePalette from "../tile-palette";
import Map from "../map";

import useDraggable from "../../hooks/use-draggable";

import { SIZE } from "../../constants";

const MAP_PART = { row: 0, column: 0 };
const level = 1;

export default function Editor() {
  const levelData = require(`../../data/levels/level_${level}.json`);
  const tilesData = require(`../../data/levels/level_${level}/part_${MAP_PART.row}_${MAP_PART.column}.json`);

  const { position } = useDraggable("handle");

  const [activeTile, setActiveTile] = useState({ x: 2 * SIZE, y: 4 * SIZE });
  const [tiles, setTiles] = useState(tilesData?.tiles || []);
  const [mapSize, setMapSize] = useState({
    width: levelData.size * 7 || 672,
    height: levelData.size * 7 || 672,
  });
  const [bgLayer, setBgLayer] = useState(false);

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
        tileset={levelData.tileset}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        setBgLayer={setBgLayer}
        bgLayer={bgLayer}
        exportData={exportData}
      />

      <Map
        tiles={tiles}
        tileset={levelData.tileset}
        size={mapSize}
        activeTile={activeTile}
        setTiles={setTiles}
        bgLayer={bgLayer}
      />
    </div>
  );
}
