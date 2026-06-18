import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="mx-auto p-4 text-center text-gray-700">
      <h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">
        Not Found
      </h1>
      <p class="mt-8">Welcome to the lost-and-found section of the website.</p>
      <p>
        Currently we don't have the page you've requested, but we do have a nice{" "}
        <A href="/" class="text-sky-600 hover:underline">
          home
        </A>{" "}
        page to offer.
      </p>
    </main>
  );
}
