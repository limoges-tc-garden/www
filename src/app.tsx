import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

// @refresh reload
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import BrowserTitle from "./components/BrowserTitle";

export default function App () {
  return (
    <MetaProvider>
      <BrowserTitle />
      
      <Router
        root={props => (
          <div class="grid min-h-screen gap-12" style={{ "grid-template-rows": "auto 1fr auto" }}>
            <NavBar />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </div>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  );
}
