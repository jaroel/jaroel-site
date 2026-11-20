import { flush } from "solid-js";
import { expect, test, vi } from "vitest";
import App from "~/app";
import { mount } from "~/test/mount";

test("unknown paths render the not-found page", async () => {
  window.history.pushState({}, "", "/nope");
  const container = mount(() => <App />);

  await vi.waitFor(() => {
    flush();
    expect(container.querySelector("h1")?.textContent).toBe("Not Found");
  });
});
