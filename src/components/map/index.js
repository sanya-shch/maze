import React from "react";

import { SIZE } from "../../constants";

export default function Map({ tiles, tileset, size, dropTile }) {
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
                  width: SIZE,
                  height: SIZE,
                  ...(tile.v_bg
                    ? {
                        background: `url(/assets/maps/${tileset}.png) -${tile.v_bg.x}px -${tile.v_bg.y}px no-repeat`,
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
                        background: `url(/assets/maps/${tileset}.png) -${tile.v.x}px -${tile.v.y}px no-repeat`,
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
