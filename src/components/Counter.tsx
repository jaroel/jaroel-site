import { createSignal } from "solid-js";

export const [count, setCount] = createSignal(0);

const messages = [
  "Click me!",
  "Once",
  "Twice",
  "Three times a lady",
  "Quatre",
  "🛥",
  "Zes",
  "Sieben",
  "Acht",
  "Negen",
];

export default function Counter() {
  return (
    <button
      type="button"
      class="min-w-50 rounded-full border-2 border-gray-300 bg-gray-100 px-8 py-4 focus:border-gray-400 active:border-gray-400"
      onClick={() => setCount(count() + 1)}
    >
      {messages[count()] ?? count()}
    </button>
  );
}
