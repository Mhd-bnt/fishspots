import { APP_NAME } from "../config/constants";
import { SpotList } from "../components/SpotList.js";

const getMockSpots = async () => {
  const url = `http://localhost:9000/api/fishspots`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `[GET-MOCK-SPOT] status code ${res.status} error: ${res.error}`,
      );
    }
    const data = await res.json();
    console.log(data);
    return data.data;
  } catch (error) {
    console.log(`Error:`, error);
  }
};

export async function HomePage() {
  const spots = await getMockSpots((spots) => {
    return `
    <div class="page page--home"> 
     <section class="hero">
        <h1>Bienvenue sur ${APP_NAME}</h1>
        <p>Découvrez les meilleurs spots de pêche près de chez vous</p>
      </section>

      <section class="spots-section">
        <h2>Spots populaires</h2>
        ${SpotList({ spots })}
      </section>
    </div>
  `;
  });
}
