export function SpotDetailPage(params) {
  const { id } = params;

  return `
    <div class="page page--spot-detail">
      <a href="/" data-link class="back-link">&larr; Retour à la liste</a>
      <h1>Détail du spot #${id}</h1>
      <p>Contenu à implémenter...</p>
    </div>
  `;
}
