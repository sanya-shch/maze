export const getSkinImport = (skin) => {
  switch (skin) {
    case "e1_96":
      return import(
        /* webpackChunkName: "e1_96" */ "../assets/skins/e1_96.png"
      );

    case "f1_96":
      return import(
        /* webpackChunkName: "f1_96" */ "../assets/skins/f1_96.png"
      );

    case "f2_96":
      return import(
        /* webpackChunkName: "f2_96" */ "../assets/skins/f2_96.png"
      );

    case "m1_96":
      return import(
        /* webpackChunkName: "m1_96" */ "../assets/skins/m1_96.png"
      );

    case "m2_96":
      return import(
        /* webpackChunkName: "m2_96" */ "../assets/skins/m2_96.png"
      );

    default:
      return import(
        /* webpackChunkName: "m1_96" */ "../assets/skins/m1_96.png"
      );
  }
};
