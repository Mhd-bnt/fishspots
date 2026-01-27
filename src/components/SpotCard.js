export function SpotCard(props) {
  const { id, name, type, fish = [], rating, image } = props;

  // Génération des étoiles pour la note
  const stars =
    "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));

  return `
    <article class="spot-card">
      <div class="spot-card__image">
        <img src="${image}" alt="${name}" loading="lazy" />
        <span class="spot-card__type">${type}</span>
      </div>

      <div class="spot-card__content">
        <h3 class="spot-card__title">${name}</h3>

        <div class="spot-card__fish">
          ${fish.map((f) => `<span class="fish-tag">${f}</span>`).join("")}
        </div>

        <div class="spot-card__rating">
          <span class="stars">${stars}</span>
          <span class="rating-value">${rating.toFixed(1)}</span>
        </div>

        <a href="/spots/${id}" data-link class="spot-card__link">
          Voir le détail &rarr;
        </a>
      </div>
    </article>
  `;
}
