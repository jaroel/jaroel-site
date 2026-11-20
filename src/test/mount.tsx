import { render } from "@solidjs/web";
import { afterEach } from "vitest";

let dispose: (() => void) | undefined;

afterEach(() => {
  dispose?.();
  dispose = undefined;
  document.body.innerHTML = "";
  window.history.pushState({}, "", "/");
});

/** Render into a fresh container; cleaned up after each test. */
export function mount(code: Parameters<typeof render>[0]) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  dispose = render(code, container);
  return container;
}
