import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/dm-sans/latin-400.css";
import "@fontsource/dm-sans/latin-500.css";
import "@fontsource/dm-sans/latin-600.css";
import "@fontsource/ibm-plex-mono/latin-400.css";
import "./styles/globals.css";
import App from "./App";

const Router =
  import.meta.env.VITE_ROUTER_MODE === "hash" ? HashRouter : BrowserRouter;
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router
      basename={
        import.meta.env.VITE_ROUTER_MODE === "hash"
          ? undefined
          : import.meta.env.BASE_URL
      }
    >
      <App />
    </Router>
  </StrictMode>,
);
