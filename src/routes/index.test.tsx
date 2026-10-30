import { render } from "@solidjs/web";
import { flush } from "solid-js";
import { afterEach, expect, test, vi } from "vite-plus/test";
import App from "~/app";

let dispose: (() => void) | undefined;

afterEach(() => {
  dispose?.();
  dispose = undefined;
  document.body.innerHTML = "";
});

const secretLink = () =>
  [...document.querySelectorAll("a")].find(
    (a) => a.textContent === "Secret!" && a.getAttribute("href") === "/secret",
  );

test("clicking the counter six times reveals the secret link", async () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  dispose = render(() => <App />, container);

  // The route is code-split, so wait for the home page to resolve.
  await vi.waitFor(() => {
    flush();
    expect(container.querySelector("button")).not.toBeNull();
  });

  expect(secretLink()).toBeUndefined();

  const button = container.querySelector("button");
  for (let i = 0; i < 6; i++) {
    button?.click();
    flush();
  }

  expect(secretLink()).toBeDefined();
});
