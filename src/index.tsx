import React from "react";
import ReactDOM from "react-dom/client";
import { NFTContextProvider } from "./context/NFTContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <NFTContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </NFTContextProvider>
);
