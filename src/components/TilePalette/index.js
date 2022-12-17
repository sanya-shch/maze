import React, { useState, useEffect } from "react";

import { SIZE } from "../../constants";
import dragHandle from "../../assets/drag-handle.png";
import { getTileSetImport } from "../../helpers/getTileSetImport";

export default function TilePalette({
  tileset,
  position,
  activeTile,
  setActiveTile,
  setBgLayer,
  bgLayer,
  exportData,
  isErase,
  setIsErase,
}) {
  const tilesetData = require("../../data/tilesets.json");

  const { width, height } = tilesetData[tileset].size;
  const tiles = [];
  let id = 0;

  for (let y = 0; y < height; y = y + SIZE) {
    const row = [];
    for (let x = 0; x < width; x = x + SIZE) {
      row.push({ x, y, id: id++ });
    }
    tiles.push(row);
  }

  const [tileSetData, setTileSetData] = useState(null);

  useEffect(() => {
    getTileSetImport(tileset)
      .then((module) => module.default)
      .then((dep) => {
        setTileSetData(dep);
      });
  }, [tileset]);

  // if (!tileSetData) return null;

  return (
    <div
      id="palette"
      style={{
        position: "absolute",
        border: "1px solid black",
        top: position.y,
        left: position.x,
        zIndex: 100,
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: 4,
        }}
      >
        <img
          id="handle"
          src={dragHandle}
          alt=""
          style={{
            cursor: "grab",
            "object-fit": "contain",
          }}
        />
        <div
          style={{
            position: "relative",
            width: SIZE,
            marginLeft: 8,
          }}
        >
          <div
            style={{
              background: `url(${tileSetData}) -${activeTile.x}px -${activeTile.y}px no-repeat`,
              width: SIZE,
              height: SIZE,
              top: 2,
            }}
          />
        </div>

        <div
          style={{
            marginLeft: 8,
          }}
        >
          <button
            onClick={() => setBgLayer((value) => !value)}
            style={{
              padding: "6px 20px",
              fontSize: 14,
            }}
          >
            BG Layer {bgLayer ? "on" : "off"}
          </button>
        </div>

        <div
          style={{
            marginLeft: 8,
          }}
        >
          <button
            onClick={() => setIsErase((value) => !value)}
            style={{
              padding: "6px 20px",
              fontSize: 14,
            }}
          >
            Erase {isErase ? "on" : "off"}
          </button>
        </div>

        <div
          style={{
            marginLeft: 8,
          }}
        >
          <button
            onClick={exportData}
            style={{
              padding: "6px 20px",
              fontSize: 14,
            }}
          >
            Export File
          </button>
        </div>
      </div>

      {tiles.map((row, y) => (
        <div key={`tiles-${y}`} style={{ display: "flex" }}>
          {row.map((tile, x) => (
            <div
              key={`tile-${x}-${y}`}
              onClick={() => setActiveTile({ x: x * SIZE, y: y * SIZE })}
              style={{
                borderTop: "1px solid #333",
                borderRight: "1px solid #333",
                background: `url(${tileSetData}) -${x * SIZE}px -${
                  y * SIZE
                }px no-repeat`,
                width: SIZE,
                height: SIZE,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
