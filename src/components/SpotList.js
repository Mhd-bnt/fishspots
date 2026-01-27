import { SpotCard } from "./SpotCard";

export function SpotList(props) {
  const { spots = [] } = props;

  if (spots.length === 0) {
    reurn`
    <div class="spot-list spot-list--empty">
    <p>Aucun spot trouvé.</p>
    </div>
    `;
  }

  return ` 
<div class="spot-list">
      ${spots.map((spot) => SpotCard(spot)).join("")}
</div>
`;
}
