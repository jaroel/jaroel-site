import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

export default function Secret() {
  const [password, setPassword] = createSignal("");

  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <Title>Say, here's an interesting one:</Title>
      <h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">
        Secret page!
      </h1>
      <p class="my-4">What's the password?</p>
      <input
        onInput={({ target }) => {
          setPassword(target.value);
        }}
        class="border"
        type="password"
      />

      <p class="my-8">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>Secret page</span>
      </p>

      <Show when={password() === "Ken sent me."}>
        <img
          src="/egg02.png"
          alt="A screenshot with text 'Perhaps you need to purchase a copy of Leisure Suit Larry'"
        />
      </Show>
    </main>
  );
}
