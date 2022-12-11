export const getMapFile = async (level, mapPartRow, mapPartColumn) => {
  let file = null;

  switch (`${level}_${mapPartRow}_${mapPartColumn}`) {
    case "start_0_0":
      file = await import(
        /* webpackChunkName: "start_0_0" */ "../data/levels/level_start/map.json"
        );
      break;

    case "1_0_0":
      file = await import(
        /* webpackChunkName: "1_0_0" */ "../data/levels/level_1/part_0_0.json"
      );
      break;
    case "1_0_1":
      file = await import(
        /* webpackChunkName: "1_0_1" */ "../data/levels/level_1/part_0_1.json"
      );
      break;
    case "1_0_2":
      file = await import(
        /* webpackChunkName: "1_0_2" */ "../data/levels/level_1/part_0_2.json"
      );
      break;
    case "1_0_3":
      file = await import(
        /* webpackChunkName: "1_0_3" */ "../data/levels/level_1/part_0_3.json"
      );
      break;
    case "1_0_4":
      file = await import(
        /* webpackChunkName: "1_0_4" */ "../data/levels/level_1/part_0_4.json"
      );
      break;

    case "1_1_0":
      file = await import(
        /* webpackChunkName: "1_1_0" */ "../data/levels/level_1/part_1_0.json"
      );
      break;
    case "1_1_1":
      file = await import(
        /* webpackChunkName: "1_1_1" */ "../data/levels/level_1/part_1_1.json"
      );
      break;
    case "1_1_2":
      file = await import(
        /* webpackChunkName: "1_1_2" */ "../data/levels/level_1/part_1_2.json"
      );
      break;
    case "1_1_3":
      file = await import(
        /* webpackChunkName: "1_1_3" */ "../data/levels/level_1/part_1_3.json"
      );
      break;
    case "1_1_4":
      file = await import(
        /* webpackChunkName: "1_1_4" */ "../data/levels/level_1/part_1_4.json"
      );
      break;

    case "1_2_0":
      file = await import(
        /* webpackChunkName: "1_2_0" */ "../data/levels/level_1/part_2_0.json"
      );
      break;
    case "1_2_1":
      file = await import(
        /* webpackChunkName: "1_2_1" */ "../data/levels/level_1/part_2_1.json"
      );
      break;
    case "1_2_2":
      file = await import(
        /* webpackChunkName: "1_2_2" */ "../data/levels/level_1/part_2_2.json"
      );
      break;
    case "1_2_3":
      file = await import(
        /* webpackChunkName: "1_2_3" */ "../data/levels/level_1/part_2_3.json"
      );
      break;
    case "1_2_4":
      file = await import(
        /* webpackChunkName: "1_2_4" */ "../data/levels/level_1/part_2_4.json"
      );
      break;

    case "1_3_0":
      file = await import(
        /* webpackChunkName: "1_3_0" */ "../data/levels/level_1/part_3_0.json"
      );
      break;
    case "1_3_1":
      file = await import(
        /* webpackChunkName: "1_3_1" */ "../data/levels/level_1/part_3_1.json"
      );
      break;
    case "1_3_2":
      file = await import(
        /* webpackChunkName: "1_3_2" */ "../data/levels/level_1/part_3_2.json"
      );
      break;
    case "1_3_3":
      file = await import(
        /* webpackChunkName: "1_3_3" */ "../data/levels/level_1/part_3_3.json"
      );
      break;
    case "1_3_4":
      file = await import(
        /* webpackChunkName: "1_3_4" */ "../data/levels/level_1/part_3_4.json"
      );
      break;

    case "1_4_0":
      file = await import(
        /* webpackChunkName: "1_4_0" */ "../data/levels/level_1/part_4_0.json"
      );
      break;
    case "1_4_1":
      file = await import(
        /* webpackChunkName: "1_4_1" */ "../data/levels/level_1/part_4_1.json"
      );
      break;
    case "1_4_2":
      file = await import(
        /* webpackChunkName: "1_4_2" */ "../data/levels/level_1/part_4_2.json"
      );
      break;
    case "1_4_3":
      file = await import(
        /* webpackChunkName: "1_4_3" */ "../data/levels/level_1/part_4_3.json"
      );
      break;
    case "1_4_4":
      file = await import(
        /* webpackChunkName: "1_4_4" */ "../data/levels/level_1/part_4_4.json"
      );
      break;

    default:
      file = null;
  }

  return file;
};
