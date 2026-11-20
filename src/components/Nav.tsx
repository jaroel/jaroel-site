import { useLocation } from "@solidjs/router";
import { Show, useContext } from "solid-js";
import { CounterContext } from "~/counter-state";

const item = "mx-1.5 border-b-2 sm:mx-6";

// `/secret` and `/secret/` both resolve, so compare without the trailing slash.
const normalize = (path: string) => path.replace(/\/+$/, "") || "/";

export default function Nav() {
  const location = useLocation();
  const { count } = useContext(CounterContext);

  const active = (path: string) => ({
    "border-sky-600": normalize(location.pathname) === path,
    "border-transparent hover:border-sky-600":
      normalize(location.pathname) !== path,
  });

  return (
    <nav class="bg-sky-800">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={[item, active("/")]}>
          <a href="/">Home</a>
        </li>
        <Show when={count() === 6}>
          <li class={[item, active("/secret")]}>
            <a href="/secret/">Secret!</a>
          </li>
        </Show>
      </ul>
    </nav>
  );
}
