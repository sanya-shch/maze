import React, { useState, useEffect } from "react";

import TilePalette from "../tile-palette";
import Map from "../map";

import useDraggable from "../../hooks/use-draggable";

import { SIZE } from "../../constants";

export default function App() {
  const { position } = useDraggable("handle");

  const [tileset, setTileset] = useState("tileset_96");
  const [activeTile, setActiveTile] = useState({ x: 2 * SIZE, y: 4 * SIZE });
  const [tiles, setTiles] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: 672,
    height: 672,
  });
  const [bgTile, setBgTile] = useState({ x: -SIZE, y: -SIZE });
console.log(tiles)
  useEffect(() => {
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; y = y + SIZE) {
      const row = [];
      for (let x = 0; x < mapSize.width; x = x + SIZE) {
        row.push({ x, y, id: id++, v: { x: -SIZE, y: -SIZE } });
      }
      _tiles.push(row);
    }
    setTiles(_tiles);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: "grey",
        overflow: "hidden",
        // border: "1px solid black",
      }}
    >
      <TilePalette
        position={position}
        tileset={tileset}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        setBgTile={setBgTile}
      />

      <Map
        tiles={tiles}
        tileset={tileset}
        size={mapSize}
        activeTile={activeTile}
        setTiles={setTiles}
        bgTile={bgTile}
      />
    </div>
  );
}
