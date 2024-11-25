import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./styles.css";

import "./assets/fonts/Jomhuria-Regular.ttf";
import "./assets/fonts/NunitoSans_10pt_Condensed-Regular.ttf";
import "./assets/fonts/NunitoSans_10pt_Condensed-Bold.ttf";
import { persistor, store } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import OrientationPrompt from "./components/Overlay.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <OrientationPrompt>
        <App />
      </OrientationPrompt>
    </PersistGate>
  </Provider>
);
