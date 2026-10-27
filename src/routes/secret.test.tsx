import { render } from "@solidjs/web";
import { flush } from "solid-js";
import { afterEach, expect, test, vi } from "vitest";
import App from "~/app";

let dispose: (() => void) | undefined;

afterEach(() => {
  dispose?.();
  dispose = undefined;
  document.body.innerHTML = "";
});

const eggImage = () =>
  document.querySelector("picture img") as HTMLImageElement | null;

test("entering the correct password reveals the image", async () => {
  window.history.pushState({}, "", "/secret");

  const container = document.createElement("div");
  document.body.appendChild(container);
  dispose = render(() => <App />, container);

  const input = await vi.waitFor(() => {
    flush();
    const el = container.querySelector('input[type="password"]');
    expect(el).not.toBeNull();
    return el as HTMLInputElement;
  });

  expect(eggImage()).toBeNull();

  input.value = "Ken sent me.";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  flush();

  expect(eggImage()).not.toBeNull();
});
