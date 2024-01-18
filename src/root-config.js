import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@originalApp/masterPage",
  () => System.import("@originalApp/masterPage"),
  isActive.masterPage
);
registerApplication(
  "@originalApp/disciplineCatalogFront",
  () => System.import("@originalApp/disciplineCatalogFront"),
  isActive.disciplineCatalogFront
);
registerApplication(
  "@originalApp/classScheduleFront",
  () => System.import("@originalApp/classScheduleFront"),
  isActive.classScheduleFront
);

start();
