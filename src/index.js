// import { mountCounter } from "./components/Counter";
// const container = document.getElementById("app");
// document.addEventListener("DOMContentLoaded", () => {
//   mountCounter("app", {
//     label: "Mon super compteur",
//     initialValue: 0,
//   });
// });

// console.log(container);

import { router } from "./router/Router.js";
import { ROUTES } from "./config/constants.js";

import { HomePage } from "./pages/HomePage.js";
import { NotFoundPage } from "./pages/NotFoundPages.js";
import { SpotDetailPage } from "./pages/SpotDetailPage.js";
import { AddSpotPage } from "./pages/AddSpotPage.js";

// import { mountCounter } from './components/Counter.js';

router
  .addRoute(ROUTES.HOME, HomePage)
  .addRoute(ROUTES.SPOT_DETAIL, SpotDetailPage)
  .addRoute(ROUTES.ADD_SPOT, AddSpotPage)
  .setNotFound(NotFoundPage);

document.addEventListener("DOMContentLoaded", () => {
  router.start();
});
