import { Meta, Title } from "@solidjs/meta";
import { pageRoutes } from "virtual:file-routes";
import { createRouter } from "@solidjs/router";
import { fileRoutes } from "@solidjs/router/fs";
import { Errored, Loading } from "solid-js";
import Nav from "~/components/Nav";
import { CounterContext, createCounter } from "~/counter-state";
import "./app.css";

const Router = createRouter({ routes: fileRoutes(pageRoutes) });

export default function App() {
  const counter = createCounter();

  return (
    <Router>
      {(props) => (
        <>
          <Title>jaroel.nl</Title>
          <Meta
            name="description"
            content="jaroel.nl - web things and that kind of stuff"
          />
          <CounterContext value={counter}>
            <Nav />
            <Loading fallback={<main>Loading…</main>}>
              <Errored fallback={() => <main>Something went wrong.</main>}>
                {props.children}
              </Errored>
            </Loading>
          </CounterContext>
        </>
      )}
    </Router>
  );
}
