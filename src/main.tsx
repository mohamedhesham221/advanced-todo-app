import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { registerSW } from "virtual:pwa-register";

registerSW({
  onNeedRefresh() {
    const userConfirmed = window.confirm(
      "A new version of this app is available. Load the new version?"
    );
    if (userConfirmed) {
      window.location.reload();
    }
  },
});
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
