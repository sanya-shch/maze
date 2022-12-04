import { useState, useContext } from "react";
import { Context } from "../../store";

export default function useWalk(maxSteps, spriteSize, mapPartCount, mapSize) {
  const { mapPartRow, mapPartColumn, setMapPartRow, setMapPartColumn } =
    useContext(Context);

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  const stepSize = spriteSize;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  function move(dir) {
    if (position.y + modifier[dir].y >= mapSize) {
      // bottom

      if (mapPartRow < mapPartCount - 1) {
        setPosition((prev) => ({
          x: prev.x,
          y: 0,
        }));

        setMapPartRow((prev) => prev + 1);
      }
    } else if (position.y + modifier[dir].y < 0) {
      // up

      if (mapPartRow !== 0) {
        setPosition((prev) => ({
          x: prev.x,
          y: mapSize - spriteSize,
        }));

        setMapPartRow((prev) => prev - 1);
      }
    } else if (position.x + modifier[dir].x < 0) {
      // left

      if (mapPartColumn !== 0) {
        setPosition((prev) => ({
          x: mapSize - spriteSize,
          y: prev.y,
        }));

        setMapPartColumn((prev) => prev - 1);
      }
    } else if (position.x + modifier[dir].x >= mapSize) {
      // right

      if (mapPartColumn < mapPartCount - 1) {
        setPosition((prev) => ({
          x: 0,
          y: prev.y,
        }));

        setMapPartColumn((prev) => prev + 1);
      }
    } else {
      setPosition((prev) => ({
        x: prev.x + modifier[dir].x,
        y: prev.y + modifier[dir].y,
      }));
    }
  }

  function walk(dir) {
    setDir((prev) => {
      if (directions[dir] === prev) {
        move(dir);
      }

      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  return {
    walk,
    dir,
    step,
    position,
  };
}
