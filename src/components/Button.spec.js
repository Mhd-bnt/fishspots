import { describe, it, expect } from "vitest";
import { Button } from "./Button";

const renderButton = (props) => {
  const html = Button(props);
  const container = document.createElement("div");
  container.innerHTML = html.trim();
  return container.firstChild;
};

describe("Button component", () => {
  it("should display the correct text", () => {
    const button = renderButton({ text: "Cliquez ici" });
    expect(button.textContent).toBe("Cliquez ici");
  });
});
