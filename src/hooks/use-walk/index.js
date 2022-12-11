import { useContext } from "react";
import { GameContext } from "../../store";

export default function useWalk(maxSteps, spriteSize, mapPartCount, mapSize) {
  const {
    mapPartRow,
    mapPartColumn,
    setMapPartRow,
    setMapPartColumn,
    playerPositionX,
    setPlayerPositionX,
    playerPositionY,
    setPlayerPositionY,
    tilesData,
    impassableItems,
    dir,
    setDir,
    step,
    setStep,
    setLoading,
  } = useContext(GameContext);

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

  const getNextPosition = (dir) => ({
    x: (playerPositionX + modifier[dir].x) / spriteSize,
    y: (playerPositionY + modifier[dir].y) / spriteSize,
  });

  const isCanMove = ({ x: nextX, y: nextY }) => {
    const nextItem = tilesData.tiles[nextY]?.[nextX];
    const isImpassableItem =
      nextItem?.v &&
      impassableItems.items.some(
        (item) => item.x === nextItem.v.x && item.y === nextItem.v.y
      );
    const isImpassableBGItem =
      nextItem?.v_bg &&
      impassableItems.bg_items.some(
        (item) => item.x === nextItem.v_bg.x && item.y === nextItem.v_bg.y
      );

    return !isImpassableItem && !isImpassableBGItem;
  };

  const move = (dir) => {
    if (
      playerPositionY + modifier[dir].y >= mapSize - spriteSize &&
      dir === "down"
    ) {
      // bottom

      if (mapPartRow < mapPartCount - 1) {
        setPlayerPositionY(spriteSize);

        setMapPartRow((prev) => prev + 1);
        setLoading(true);
      } else if (playerPositionY < mapSize - spriteSize) {
        setPlayerPositionY((prev) => prev + modifier[dir].y);
      }
    } else if (playerPositionY + modifier[dir].y < spriteSize && dir === "up") {
      // up

      if (playerPositionY + modifier[dir].y < spriteSize && mapPartRow !== 0) {
        setPlayerPositionY(mapSize - spriteSize * 2);

        setMapPartRow((prev) => prev - 1);
        setLoading(true);
      } else if (playerPositionY > 0) {
        setPlayerPositionY((prev) => prev + modifier[dir].y);
      }
    } else if (
      playerPositionX + modifier[dir].x < spriteSize &&
      dir === "left"
    ) {
      // left

      if (
        playerPositionX + modifier[dir].x < spriteSize &&
        mapPartColumn !== 0
      ) {
        setPlayerPositionX(mapSize - spriteSize * 2);

        setMapPartColumn((prev) => prev - 1);
        setLoading(true);
      } else if (playerPositionX > 0) {
        setPlayerPositionX((prev) => prev + modifier[dir].x);
      }
    } else if (
      playerPositionX + modifier[dir].x >= mapSize - spriteSize &&
      dir === "right"
    ) {
      // right

      if (mapPartColumn < mapPartCount - 1) {
        setPlayerPositionX(spriteSize);

        setMapPartColumn((prev) => prev + 1);
        setLoading(true);
      } else if (playerPositionX < mapSize - spriteSize) {
        setPlayerPositionX((prev) => prev + modifier[dir].x);
      }
    } else {
      setPlayerPositionX((prev) => prev + modifier[dir].x);
      setPlayerPositionY((prev) => prev + modifier[dir].y);
    }
  };

  const walk = (dir) => {
    setDir((prev) => {
      if (directions[dir] === prev && isCanMove(getNextPosition(dir))) {
        move(dir);
      }

      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  };

  return {
    walk,
    dir,
    step,
  };
}
