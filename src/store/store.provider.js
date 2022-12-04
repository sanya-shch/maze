import React, { useState, useMemo, useEffect } from "react";

import { Context } from "./store.context.js";
import { getMapFile } from "../helpers/getMapFile";

function Provider({ children }) {
  const [level, setLevel] = useState(1);
  const [mapPartRow, setMapPartRow] = useState(0);
  const [mapPartColumn, setMapPartColumn] = useState(0);

  const [tilesData, setTilesData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const file = await getMapFile(level, mapPartRow, mapPartColumn);

      setTilesData(file);
    }

    fetchData();
  }, [level, mapPartRow, mapPartColumn]);

  const value = useMemo(
    () => ({
      tilesData,
      level,
      setLevel,
      mapPartRow,
      setMapPartRow,
      mapPartColumn,
      setMapPartColumn,
    }),
    [tilesData]
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
