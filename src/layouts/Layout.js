import { Header } from "../layouts/Header.js";
import { Footer } from "../layouts/Footer.js";
import { Main } from "../layouts/Main.js";

export function Layout(props = {}) {
  const { content = "" } = props;

  return `
    <div class="layout">
      ${Header()}
      ${Main({ content })}
      ${Footer()}
    </div>
  `;
}
