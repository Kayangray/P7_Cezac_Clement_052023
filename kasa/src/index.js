import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Charge les routes pour les différentes pages
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
