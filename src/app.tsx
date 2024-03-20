import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

export default function App () {
  return (
    <Router
      root={props => (
        <>
          <nav>
            <a href="/">Accueil</a>
            <a href="/">Mon Club</a>
          </nav>

          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
