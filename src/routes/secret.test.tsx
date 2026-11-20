import { flush } from "solid-js";
import { expect, test, vi } from "vitest";
import App from "~/app";
import { mount } from "~/test/mount";

const eggImage = () =>
  document.querySelector("picture img") as HTMLImageElement | null;

async function renderSecret() {
  window.history.pushState({}, "", "/secret");
  const container = mount(() => <App />);

  return await vi.waitFor(() => {
    flush();
    const el = container.querySelector('input[type="password"]');
    expect(el).not.toBeNull();
    return el as HTMLInputElement;
  });
}

test("entering the correct password reveals the image", async () => {
  const input = await renderSecret();

  expect(eggImage()).toBeNull();

  input.value = "Ken sent me.";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  flush();

  expect(eggImage()).not.toBeNull();
});

test("pasted passwords may carry whitespace", async () => {
  const input = await renderSecret();

  input.value = "  Ken sent me.\n";
  input.dispatchEvent(new Event("input", { bubbles: true }));
  flush();

  expect(eggImage()).not.toBeNull();
});
