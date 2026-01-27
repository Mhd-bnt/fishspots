"use strict";

// Local state

const state = {
  count: 0,
};

// Init counter with value :

export function initCounter(initialValue = 0) {
  state.count = initialValue;
}

// Increment Counter :

function increment(targetId) {
  state.count++;
  render(targetId);
}

// Decremen counter :
function decrement(targetId) {
  state.count--;
  render(targetId);
}

// Initial state :

function reset(targetId, initialValue) {
  state.count = initialValue;
  render(targetId);
}

// Render Counter :

function render(targetId) {
  const container = document.getElementById(targetId);
  if (container) {
    container.innerHTML = Counter({
      targetId,
      label: container.dataset.label || "Compteur",
      initialValue: parseInt(container.dataset.initial) || 0,
    });
    attachEvents(targetId);
  }
}

// Add EventListener to button :

function attachEvents(targetId) {
  const container = document.getElementById(targetId);
  // const initialValue = parseInt(container.dataset.inital) || 0;

  container
    .querySelector(".btn-decrement")
    ?.addEventListener("click", () => decrement(targetId));
  container
    .querySelector(".btn-increment")
    ?.addEventListener("click", () => increment(targetId));
  container
    .querySelector(".btn-reset")
    ?.addEventListener("click", () => reset(targetId));
}

// Counter Component :

export function Counter(props) {
  const { label = "Compteur", targetId } = props;

  return `
<div class="Counter">
<h3 class="counter__label">${label} </h3>
<div>
<span class"counter__value">${state.count}</span>
</div> 
<div class="counter__controls">
<button class="btn btn-decrement" type="button">-</button>
<button class="btn btn-reset" type="button">Reset</button>
<button class="btn btn-increment" type="button">+</button>
</div>

</div>
`;
}

export function mountCounter(targetId, props = {}) {
  const { label = "Compteur", initialValue = 0 } = props;

  const container = document.getElementById(targetId);
  if (container) {
    container.dataset.label = label;
    container.dataset.initial = initialValue;
    initCounter(initialValue);
    render(targetId);
  }
}
