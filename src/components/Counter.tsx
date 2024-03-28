import { createSignal } from "solid-js";

export const [count, setCount] = createSignal(0);

const messages = [
  "Click me!",
  "Once",
  "Twice",
  "Thrice",
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
      class="w-[200px] rounded-full bg-gray-100 border-2 border-gray-300 focus:border-gray-400 active:border-gray-400 px-[2rem] py-[1rem]"
      onClick={() => setCount(count() + 1)}
    >
      {messages[count()] ?? count()}
    </button>
  );
}
