import { Meta, Title } from "@solidjs/meta";
import { pageRoutes } from "virtual:file-routes";
import { createRouter } from "@solidjs/router";
import { fileRoutes } from "@solidjs/router/fs";
import { Loading } from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";

const Router = createRouter({ routes: fileRoutes(pageRoutes) });

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>jaroel.nl</Title>
          <Meta
            name="description"
            content="jaroel.nl - doet web dingen en dat soort spul"
          />
          <Nav />
          <Loading fallback={<main>Loading…</main>}>{props.children}</Loading>
        </>
      )}
    </Router>
  );
}
