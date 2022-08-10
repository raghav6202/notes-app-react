import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {LandingPage } from "./../src/Pages/Landing-Page/landingPage";
import { NotesPage } from "./Pages/Notes-Page/notesPage";
export {LandingPage,NotesPage}
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
