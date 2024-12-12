import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import MyAppDataProvider from "./context/MyAppDataProvider";

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router>
        <MyAppDataProvider>
          <App />
        </MyAppDataProvider>
        <SpeedInsights />
      </Router>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
