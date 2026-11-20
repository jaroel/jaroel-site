import { flush } from "solid-js";
import { expect, test, vi } from "vitest";
import App from "~/app";
import { mount } from "~/test/mount";

test("resume renders scoped table headers", async () => {
  window.history.pushState({}, "", "/resume");
  const container = mount(() => <App />);

  await vi.waitFor(() => {
    flush();
    expect(container.querySelector("h1")?.textContent).toBe("Roel Bruggink");
  });

  expect(container.querySelectorAll('th[scope="row"]').length).toBeGreaterThan(
    0,
  );
  expect(container.querySelectorAll('th[scope="col"]').length).toBe(2);
});
