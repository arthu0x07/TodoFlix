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

// O Modal será utilizado aqui, pois é o nível mais alto englobando todas as páginas.

// O modal precisa de um state que será utilizado para definir se ele está aberto ou fechado, uma função para setar esse estádo como verdadeiro e outra pra setar como falso;

// A função que irá setar como verdadeiro será utilizado por outros componentes para abrir esse modal.

// A função de fechar será passado para o próprio modal e sera utilizada também por nos para fazer a opção de clicar no X e fechar...

// Colocar essas funções e o estado no contexto é uma solução viável?

// Colocando o componente do modal nos arquivos das páginas resultará na configuração do modal em todos os componentes de página, o que não é algo muito complexo de fazer, porém, resulta em multiplicação de código igual... Fora que, ainda assim, teremos que jogar as funções do modal no contexto, porém, o modal não ficará no mesmo arquivo que o provider deste contexto...

