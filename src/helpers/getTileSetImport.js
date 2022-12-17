export const getTileSetImport = (skin) => {
  switch (skin) {
    case "tileset_96":
      return import(
        /* webpackChunkName: "tileset_96" */ "../assets/maps/tileset_96.png"
      );

    default:
      return import(
        /* webpackChunkName: "tileset_96" */ "../assets/maps/tileset_96.png"
      );
  }
};
