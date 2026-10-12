import { flush } from "solid-js";
import { render } from "@solidjs/web";
import { afterEach, expect, test } from "vitest";
import Counter from "./Counter";

let dispose: (() => void) | undefined;

afterEach(() => {
  dispose?.();
  dispose = undefined;
  document.body.innerHTML = "";
});

test("click changes the message", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  dispose = render(() => <Counter />, container);

  const button = container.querySelector("button");
  expect(button).not.toBeNull();
  expect(button?.textContent).toBe("Click me!");

  button?.click();
  flush();
  expect(button?.textContent).toBe("Once");

  button?.click();
  flush();
  expect(button?.textContent).toBe("Twice");
});
