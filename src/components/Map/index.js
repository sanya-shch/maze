import React, { useState, useEffect } from "react";

import { SIZE } from "../../constants";
import { getTileSetImport } from "../../helpers/getTileSetImport";

export default function Map({ tiles, tileset, size, dropTile }) {
  const [tileSetData, setTileSetData] = useState(null);

  useEffect(() => {
    getTileSetImport(tileset)
      .then((module) => module.default)
      .then((dep) => {
        setTileSetData(dep);
      });
  }, [tileset]);

  if (!tileSetData) return null;

  return (
    <div
      style={{
        boxSizing: "border-box",
        backgroundColor: "white",
        width: size.width,
      }}
    >
      <div style={{ position: "absolute", zIndex: 1 }}>
        {tiles.map((row, y) => (
          <div style={{ display: "flex" }} key={`map-${y}`}>
            {row.map((tile, x) => (
              <div
                key={`map-${x}-${y}`}
                onClick={() => dropTile?.({ x, y })}
                style={{
                  // borderBottom: "1px solid #333",
                  // borderRight: "1px solid #333",
                  // outline: "1px solid #23674e",
                  width: SIZE,
                  height: SIZE,
                  ...(tile.v_bg
                    ? {
                        background: `url(${tileSetData}) -${tile.v_bg.x}px -${tile.v_bg.y}px no-repeat`,
                      }
                    : {}),
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", zIndex: 2 }}>
        {tiles.map((row, y) => (
          <div style={{ display: "flex" }} key={`map-${y}`}>
            {row.map((tile, x) => (
              <div
                key={`map-${x}-${y}`}
                onClick={() => dropTile?.({ x, y })}
                style={{
                  // borderBottom: "1px solid #333",
                  // borderRight: "1px solid #333",
                  width: SIZE,
                  height: SIZE,
                  ...(tile.v
                    ? {
                        background: `url(${tileSetData}) -${tile.v.x}px -${tile.v.y}px no-repeat`,
                      }
                    : {}),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
