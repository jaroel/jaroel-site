export default function Resume() {
	const webYears = new Date().getFullYear() - 2004;
	const python_years = new Date().getFullYear() - 2008;
	return (
		<main class="flex flex-col items-center mx-auto text-left text-gray-700 space-y-4 p-6 md:w-3xl">
			<h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase mt-8">
				Roel Bruggink
			</h1>
			<p class="mt-8">
				Python software developer with {webYears}+ years experience in closed
				and open source web application development
			</p>
			<h2 class="text-2xl text-black">Skills</h2>
			<table class="text-left border-separate">
				<tbody>
					<tr class="align-text-top">
						<th>Web</th>
						<td>{webYears}+ years</td>
					</tr>
					<tr class="align-text-top">
						<th>Python</th>
						<td>
							{python_years}+ years; Plone, Django, Pyramid,
							Flask, Zope, Grok
						</td>
					</tr>
					<tr class="align-text-top">
						<th>Frontend</th>
						<td>Typescript, Javascript, Angular</td>
					</tr>
					<tr class="align-text-top">
						<th>Backend</th>
						<td>Python</td>
					</tr>
					<tr class="align-text-top">
						<th>Project management style</th>
						<td>Scrum; agile; fixed-price, scope and/or time</td>
					</tr>
					<tr class="align-text-top">
						<th>Language</th>
						<td>Dutch (native), English (full professional)</td>
					</tr>
				</tbody>
			</table>
			<p class="text-gray-300">
				Able to step in into most web projects using mainstream software stacks.
			</p>

			<h2 class="text-2xl text-black">Project history</h2>

			<table class="text-left border-separate">
				<thead>
					<tr>
						<th>When</th>
						<th>Where</th>
					</tr>
				</thead>
				<tbody>
					<tr class="align-text-top">
						<th>2025-</th>
						<td>Lab Digital</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Diverse set of web applications ranging from simple content sites
							to e-commerce shops with multiple mobile apps as frontends.
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2024-2025</th>
						<td>Sky Medical Group (via Vicktor)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Python / Django RIS application. MRI scan data transformation.
							TWIIN network connector.
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2023</th>
						<td>Kitconcept</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">Plone web projects</td>
					</tr>
					<tr class="align-text-top">
						<th>2023</th>
						<td>PNZ-Produkte GmbH</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">Plone web project</td>
					</tr>
					<tr class="align-text-top">
						<th>2019-2023</th>
						<td>Minddistrict (NL/DE/EN)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Developed in and lead one of the product teams. Product teams had
							backend devs, frontend devs, UX expert, QA expert, mobile devs. We
							built software for mental healthcare, privacy and security needed
							more attention then usual. The tech stack used server driven UI to
							allow web, Android and iOS apps work more alike and share more
							logic. Contributed in Leadership sessions for the whole Product
							circle where we provided feedback on and for others in a
							leadership position.
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2020</th>
						<td>Four Digits</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">Plone intranet hosted on Windows with SSO</td>
					</tr>
					<tr class="align-text-top">
						<th>2018-2020</th>
						<td>Highbiza</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							SAAS Webshop - fully managed but customizable webshops which have
							all dependencies explicitly controlled.
							Django/Wagtail/PostgreSQL/Varnish/Elastic search
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2017-2019</th>
						<td>Kitconcept (Germany/Switzerland/India)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Plone based Enterprise social intranet; backend coding + reviewing
							frontend Angular (1) code + guiding new developers.
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2017-2019</th>
						<td>Lab Digital (Utrecht, NL)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">Multiple Wagtail based projects</td>
					</tr>
					<tr class="align-text-top">
						<th>2017-2019</th>
						<td>Lukkien (Ede, NL)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Multiple Django, Django-Oscar and/or Wagtail projects
						</td>
					</tr>

					<tr class="align-text-top">
						<th>2008-2017</th>
						<td>Four Digits</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Worked as part of a team or solo on a wide variety of web
							applications. Small to midsize public websites; frontend theming
							as well as backend programming. Mission critical portals and
							intranets; theming, backend, workflows, API integration. Data
							migrations from SQL to NoSQL. Real time bidding using Web sockets.
							Designed and implemented HTTP/JSON API endpoints.
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2008-2017</th>
						<td>Lukkien (via Four Digits)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Worked as part of a team on cross media projects. Designed and
							implemented HTTP/JSON API endpoints. Theming
						</td>
					</tr>

					<tr class="align-text-top">
						<th>2008-2017</th>
						<td>Avira (via Four Digits)</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Worked as part of an international team. On-site in Germany,
							remote in Arnhem (NL). Frontend; obviel JS (react like), HTML,
							CSS, websockets. Backend; async Python using Tornado.
						</td>
					</tr>

					<tr class="align-text-top">
						<th>2004-2008</th>
						<td>A&M ImpacT Internetdiensten</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							Public facing websites, frontend theming, PHP/MySQL backend.
							Mission critical portals; theming, backend, workflows, API
							integration.
						</td>
					</tr>
				</tbody>
			</table>

			<h2 class="text-2xl text-black">Community work</h2>
			<table class="text-left border-separate">
				<tbody>
					<tr class="align-text-top">
						<th>2016 - 2025</th>
						<td>Wagtail CMS</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							<ul class="list-disc list-inside text-left">
								<li>Contributor</li>
								<li>Attended multiple sprints</li>
							</ul>
						</td>
					</tr>
					<tr class="align-text-top">
						<th>2008 - 2024</th>
						<td>Plone CMS</td>
					</tr>
					<tr class="align-text-top">
						<td colSpan="2">
							<ul class="list-disc list-inside text-left">
								<li>
									Core developer for the Plone CMS project; development,
									discussions, improvement proposals
								</li>
								<li>
									Framework team member; review and accept Plone improvement
									proposals.
								</li>
								<li>Organized multiple development sprints</li>
								<li>Attended many development sprints</li>
								<li>
									Part of the driving group behind the Plone REST API and Plone
									React-based UI
								</li>
							</ul>
						</td>
					</tr>
				</tbody>
			</table>

			<h2 class="text-2xl text-black">Education</h2>
			<table class="text-left border-separate">
				<tbody>
					<tr class="align-text-top">
						<th>2013</th>
						<td>PRINCE2 Practitioner License P2R/NLPB178251</td>
					</tr>
					<tr class="align-text-top">
						<th>2006</th>
						<td>
							Bachelor of ICT Hogeschool van Arnhem en Nijmegen (HAN University
							of Applied Sciences)
						</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}
