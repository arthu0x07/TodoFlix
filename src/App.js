import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages/home/index";

import React, { useState } from "react";

import { MoviesContextProvider } from "./components/context/MoviesContext";

export function App() {

  return (
    <MoviesContextProvider>
      <GlobalStyles />
      <Home />
    </MoviesContextProvider>
  );
}
