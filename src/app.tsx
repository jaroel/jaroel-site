import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import { Meta, MetaProvider, Title } from "@solidjs/meta";

export default function App() {
	return (
		<MetaProvider>
			<Title>jaroel.nl</Title>
			<Meta
				name="description"
				content="jaroel.nl - doet web dingen en dat soort spul"
			/>
			<Router
				root={(props) => (
					<>
						<Nav />
						<Suspense>{props.children}</Suspense>
					</>
				)}
			>
				<FileRoutes />
			</Router>
		</MetaProvider>
	);
}
