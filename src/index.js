import { router } from "./router/Router.js";
import { ROUTES } from "./config/constants.js";
// Page import
import { HomePage } from "./pages/HomePage.js";
import { SpotDetailPage } from "./pages/SpotDetailPage.js";
import { AddSpotPage } from "./pages/AddSpotPage.js";
import { NotFoundPage } from "./pages/NotFoundPages.js";
import { FavoriteSpot } from "./pages/FavoriteSpot.js";
import { AboutPage } from "./pages/AboutPage.js";

// component import
import { Header } from "./layouts/Header.js";
import { Footer } from "./layouts/Footer.js";

document.addEventListener("DOMContentLoaded", () => {
  // 1. On affiche le Header et le Footer (une seule fois pour toute la vie du site)
  document.getElementById("header-container").innerHTML = Header();
  document.getElementById("footer-container").innerHTML = Footer();

  router.start();
});

router
  .addRoute(ROUTES.HOME, HomePage)
  .addRoute(ROUTES.SPOT_DETAIL, SpotDetailPage)
  .addRoute(ROUTES.ADD_SPOT, AddSpotPage)
  .addRoute(ROUTES.ABOUT, AboutPage)
  .addRoute(ROUTES.FAVORITES, FavoriteSpot)
  .setNotFound(NotFoundPage);
console.log(FavoriteSpot());
