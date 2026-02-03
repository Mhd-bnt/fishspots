import heartSvg from "../assets/lucide-Heart-Outlined.svg";
import localisationSvg from "../assets/lucide-MapPin-Outlined.svg";
import fishSvg from "../assets/lucide-Fish-Outlined.svg";

export function SpotCard(props) {
  const { id, name, type, fish = [], rating, image, localisation } = props;

  // Génération des étoiles pour la note
  const stars =
    "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));

  return `
    <article class="spot-card">
      <div class="spot-card__image">
        <img src="${image}" alt="${name}" loading="lazy" />
        <span class="spot-card__type"><img src=${heartSvg} alt="" class="heart-svg" />
</span>
      </div>

      <div class="spot-card__content">
        <h3 class="spot-card__title">${name}</h3>

    



<div class="info-container">
<div class="spot-card__info">
  <span><img src="${localisationSvg}" alt=""></span>
  <p>${localisation}</p>
</div>
<div class="spot-card__info">
  <span><img src="${fishSvg}" alt=""></span>
  <p>${fish[0]}</p>
</div>
</div>


 </div>
   </article>
  
  `;
}
