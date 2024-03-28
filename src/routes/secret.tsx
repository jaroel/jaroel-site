import { A } from "@solidjs/router";
import { Show, createSignal } from "solid-js";

export default function Secret() {
  const [password, setPassword] = createSignal("");

  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Secret page!
      </h1>
      <p class="my-4">What's the password?</p>
      <input
        onInput={({ target }) => {
          setPassword(target.value);
        }}
        class="border"
        type="password"
      ></input>

      <p class="my-8">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>Secret page</span>
      </p>

      <Show when={password() === "Ken sent me."}>
        <img src="/egg02.png" />
      </Show>
    </main>
  );
}
