import { Title } from "@solidjs/meta";
import { createSignal, Show } from "solid-js";
import { ResponsiveImage } from "@responsive-image/solid";
import egg02 from "~/assets/egg02.png?w=400;800&responsive";

export default function Secret() {
  const [password, setPassword] = createSignal("");

  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <Title>Say, here's an interesting one:</Title>
      <h1 class="max-6-xs my-16 text-6xl font-thin text-sky-700 uppercase">
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
        <a href="/" class="text-sky-600 hover:underline">
          Home
        </a>
        {" - "}
        <span>Secret page</span>
      </p>

      <Show when={password() === "Ken sent me."}>
        <ResponsiveImage
          src={egg02}
          class="mx-auto h-auto w-full max-w-[800px]"
          alt="A screenshot with text 'Perhaps you need to purchase a copy of Leisure Suit Larry'"
        />
      </Show>
    </main>
  );
}
