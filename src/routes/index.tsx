import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="flex flex-col items-center mx-auto text-center text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello world!
      </h1>
      <Counter />
      <p class="mt-8">Web developer based in Arnhem.</p>

      <p class="mt-8">For more info look at:</p>
      <ul class="list-disc list-inside ml-4 mb-8">
        <li>
          Profile @
          <a
            href="http://www.linkedin.com/in/roelbruggink"
            title="Roel Bruggink's Linked-in profile"
          >
            Linked-in
          </a>
        </li>
        <li>
          Profile @
          <a
            href="https://github.com/jaroel"
            title="Roel Bruggink's Github profile"
          >
            github.com
          </a>
        </li>
        <li>
          Profile @
          <a
            href="https://mastodon.nl/@jaroel"
            title="Roel Bruggink's Mastodon profile"
          >
            mastodon.nl
          </a>
        </li>
      </ul>

      <table class="text-left">
        <tbody>
          <tr>
            <th>IBAN</th>
            <td>NL36RABO0317849298</td>
          </tr>
          <tr>
            <th>VAT/BTW-id</th>
            <td>NL001865459B90</td>
          </tr>
          <tr>
            <th>COC/KvK</th>
            <td>68363427</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}
