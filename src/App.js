import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home/index";
import { Likeds } from "./pages/likeds/index";
import { AlreadySeen } from "./pages/alreadySeen/index";
import { Added } from "./pages/added/index";
import { AllMovies } from "./pages/allMovies/index";

import { MoviesContextProvider } from "./components/context/MoviesContext";

import GlobalStyles from "./styles/GlobalStyles";

export function App() {
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="favoritos" element={<Likeds />} />
          <Route path="vistos" element={<AlreadySeen />} />
          <Route path="adicionados" element={<Added />} />
          <Route path="todos" element={<AllMovies />} />
        </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
  );
}
