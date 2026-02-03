import { APP_NAME } from "../config/constants";
import { SpotList } from "../components/SpotList.js";

function getMockSpots() {
  return [
    {
      id: 1,
      localisation: "Canada",
      name: "Lac de la Forêt",
      type: "Lac",
      fish: ["Carpe", "Brochet"],
      rating: 4.5,
      image: "https://picsum.photos/seed/lake1/400/300",
    },
    {
      id: 2,
      localisation: "France, Lyon",

      name: "Rivière du Moulin",
      type: "Rivière",
      fish: ["Truite", "Perche"],
      rating: 4.2,
      image: "https://picsum.photos/seed/river1/400/300",
    },
    {
      id: 3,
      localisation: "Canada",

      name: "Étang des Saules",
      type: "Étang",
      fish: ["Carpe", "Sandre"],
      rating: 3.8,
      image: "https://picsum.photos/seed/pond1/400/300",
    },
    {
      id: 4,
      localisation: "Suisse",

      name: "Canal Saint-Martin",
      type: "Canal",
      fish: ["Perche", "Silure"],
      rating: 3.5,
      image: "https://picsum.photos/seed/canal1/400/300",
    },
  ];
}

export function HomePage() {
  return `
    <div class="page page--home"> 
     <section class="hero">
        <h1>Bienvenue sur ${APP_NAME}</h1>
        <p>Découvrez les meilleurs spots de pêche près de chez vous</p>
      </section>

      <section class="spots-section">
        <h2>Spots populaires</h2>
        ${SpotList({ spots: getMockSpots() })}
      </section>
    </div>
  `;
}
