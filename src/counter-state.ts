import { createContext, createSignal } from "solid-js";

export function createCounter() {
  const [count, setCount] = createSignal(0);
  return { count, setCount };
}

export type CounterState = ReturnType<typeof createCounter>;

// Per-request state: the provider in `app.tsx` creates it once per render, so
// server requests never share the count. Module scope holds only this
// constant.
export const CounterContext = createContext<CounterState>();
