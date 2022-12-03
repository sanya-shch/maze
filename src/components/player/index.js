import React from "react";

import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

import Actor from "../actor";

function Player({ skin }) {
  const { dir, step, walk, position } = useWalk(3);

  const data = {
    h: 96,
    w: 96,
  };

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();

    walk(dir);

    e.preventDefault();
  });

  return (
    <Actor
      sprite={`/assets/skins/${skin}.png`}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
}

export default Player;
