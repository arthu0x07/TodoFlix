import { createContext, useState, useEffect } from "react";

import { StaticDataMovies } from "../../utils/StaticDataMovies";

export const MoviesContext = createContext();

export function MoviesContextProvider(props) {
  const [DataContextMovies, setDataContextMovies] = useState(StaticDataMovies);

  useEffect(() => {
    console.log("Debbug Liked Feature");
    console.log(DataContextMovies);
  }, [DataContextMovies]);

  function setFavMovie(id) {
    let ListMovies = DataContextMovies;

    ListMovies[id].user_liked = !ListMovies[id].user_liked;

    console.log("Function SeTFaVMoviE (Not State) - pós", ListMovies[id]);

    setDataContextMovies(ListMovies);
  }

  return (
    <MoviesContext.Provider
      value={{ DataContextMovies, setDataContextMovies, setFavMovie }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
}
