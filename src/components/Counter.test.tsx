import { flush } from "solid-js";
import { expect, test } from "vitest";
import Counter from "./Counter";
import { CounterContext, createCounter } from "~/counter-state";
import { mount } from "~/test/mount";

test("click changes the message", () => {
  const container = mount(() => (
    <CounterContext value={createCounter()}>
      <Counter />
    </CounterContext>
  ));

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
