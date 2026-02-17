// Main.js
export const Main = (props = {}) => {
  const { content = "" } = props;
  return `
    <main class="main-content">
      ${content}
    </main>
  `;
};
