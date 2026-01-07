document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");
  app.innerHTML = `<h1 class="title"> Hello world</>`;
});

window.addEventListener("error", (event) => {
  console.log("[APP.JS] Error:", { error: event.error });
});
