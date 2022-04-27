import { createContext, useState } from "react";

import { StaticDataMovies } from "../../utils/StaticDataMovies";

export const MoviesContext = createContext();

export function MoviesContextProvider(props) {
  const [DataContextMovies, setDataContextMovies] = useState(StaticDataMovies);

  return (
    <MoviesContext.Provider value={{ DataContextMovies, setDataContextMovies }}>
      {props.children}
    </MoviesContext.Provider>
  );
}
