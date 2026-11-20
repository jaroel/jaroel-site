import { flush } from "solid-js";
import { expect, test, vi } from "vitest";
import App from "~/app";
import { mount } from "~/test/mount";

const homeItem = () => document.querySelector("nav li");

async function renderAt(path: string) {
  window.history.pushState({}, "", path);
  mount(() => <App />);
  await vi.waitFor(() => {
    flush();
    expect(homeItem()).not.toBeNull();
  });
  return homeItem()!;
}

test("home link is active on /", async () => {
  const item = await renderAt("/");
  expect(item.className).toContain("border-sky-600");
});

test("home link is inactive on /secret", async () => {
  const item = await renderAt("/secret");
  expect(item.className).toContain("border-transparent");
});
