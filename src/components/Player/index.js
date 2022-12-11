import React from "react";

import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

import Actor from "../Actor";

function Player({
  skin,
  mapPartCount,
  tilesCount,
  spriteSize,
  isCanWalk = true,
}) {
  const { dir, step, walk } = useWalk(
    3,
    spriteSize,
    mapPartCount,
    spriteSize * tilesCount
  );

  const data = {
    h: spriteSize,
    w: spriteSize,
  };

  useKeyPress((e) => {
    if (/^Arrow/.test(e.key)) {
      const dir = e.key.replace("Arrow", "").toLowerCase();

      isCanWalk && walk(dir);
    }

    e.preventDefault();
  });

  return (
    <Actor
      sprite={`/assets/skins/${skin}.png`}
      data={data}
      step={isCanWalk ? step : 1}
      dir={isCanWalk ? dir : 0}
    />
  );
}

export default Player;
