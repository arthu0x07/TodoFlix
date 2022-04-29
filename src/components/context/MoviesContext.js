import { createContext, useState, useEffect } from "react";

import { StaticDataMovies } from "../../utils/StaticDataMovies";

export const MoviesContext = createContext();

export function MoviesContextProvider(props) {
  const [DataContextMovies, setDataContextMovies] = useState(StaticDataMovies);

  const [DataContextSelectedMovie, setDataContextSelectedMovie] = useState({});

  const [isModalOpen, SetModalMovies] = useState(false);

  function CloseModal() {
    SetModalMovies(false);
  }

  function OpenModal() {
    SetModalMovies(true);
  }

  useEffect(() => {
    console.log("debug - contexto selected movie", DataContextSelectedMovie);
  }, [DataContextSelectedMovie]);

  useEffect(() => {
    console.log("Debbug Liked Feature");
    console.log(DataContextMovies);
  }, [DataContextMovies]);

  function setFavMovie(id) {
    let ListMovies = DataContextMovies;

    ListMovies[id].user_liked = !ListMovies[id].user_liked;

    console.log("Function SeTFaVMoviE (Not State) - pós", ListMovies[id]);

    setDataContextMovies([...ListMovies]);
  }

  function setSelectedMovie(id) {
    // Vai pegar o ID do card lá -> check
    // Vai buscar no estado dos filmes gerais -> check
    // Vai setar as informações dele no contexto DAtaContextSelectedMovie -> check
    // Tendo isso, consumiremos o esste contexto no modal ;) ----> Fazer o modal.

    let SelectedMovie = DataContextMovies[id];
    setDataContextSelectedMovie(SelectedMovie);
  }

  return (
    <MoviesContext.Provider
      value={{
        DataContextMovies,
        setDataContextMovies,
        setFavMovie,
        DataContextSelectedMovie,
        setSelectedMovie,
        isModalOpen,
        CloseModal,
        OpenModal,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
