import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = document.getElementById("fence-configurator-root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

export { Wizard } from "./components/Wizard";
export type { ConfiguratorState, ConfiguratorAction } from "./types";
