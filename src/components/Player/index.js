import React, { useLayoutEffect, useState } from "react";

import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import { getSkinImport } from "../../helpers/getSkinImport";
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

  const [skinData, setSkinData] = useState(null);

  useLayoutEffect(() => {
    getSkinImport(skin)
      .then((module) => module.default)
      .then((dep) => {
        setSkinData(dep);
      });
  }, [skin]);

  useKeyPress((e) => {
    if (/^Arrow/.test(e.key)) {
      const dir = e.key.replace("Arrow", "").toLowerCase();

      isCanWalk && skinData && walk(dir);
    }

    e.preventDefault();
  });

  if (!skinData) return null;

  return (
    <Actor
      sprite={skinData}
      data={data}
      step={isCanWalk ? step : 1}
      dir={isCanWalk ? dir : 0}
    />
  );
}

export default Player;
