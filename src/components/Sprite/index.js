import React, { useContext } from "react";
import { GameContext } from "../../store";

function Sprite({ image, data }) {
  const { playerPositionX, playerPositionY } = useContext(GameContext);

  const { h, w, y, x } = data;

  return (
    <div
      style={{
        position: "absolute",
        top: playerPositionY - h / 2.5,
        left: playerPositionX,
        height: `${h}px`,
        width: `${w}px`,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: `-${x}px -${y}px`,
        zIndex: 10,
      }}
    />
  );
}

export default Sprite;
