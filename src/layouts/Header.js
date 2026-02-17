import { ROUTES } from "../config/constants";
console.log(ROUTES);
export const Header = () => {
  return `
  <h1>Fishspots</h1>
  <div>
  <li><a href="${ROUTES.HOME}" data-link>Acceuil</a></li>
<li><a href="${ROUTES.ADD_SPOT}" data-link>Ajouter un spot</a></li>
<li><a href="${ROUTES.FAVORITES}" data-link>Mes favoris</a></li>
<li><a href="${ROUTES.ABOUT}"  data-link>À propos</a></li>
</div>

<div>

  <input type="text" placeholder="Rechercher des spots..." />

<div><img src="" alt="image profile"></div>
</div>
`;
};
