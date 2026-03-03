import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./sass/styles.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Library from "./pages/Library";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
