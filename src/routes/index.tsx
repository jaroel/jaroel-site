import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
	return (
		<main class="flex flex-col items-center mx-auto text-center text-gray-700 p-4 space-y-8">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase mt-8">
				Roel Bruggink
			</h1>
			<Counter />
			<p>Web developer based in Arnhem.</p>
			<ul class="list-disc list-outside text-left">
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
				<li>
					<A href="/resume" title="Roel Bruggink's Resumé">
						Resumé
					</A>
				</li>
				<li>
					<A href="/" title="Roel Bruggink's website - you're on it.">
						Website
					</A>
				</li>
			</ul>

			<table class="text-left border-separate">
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
