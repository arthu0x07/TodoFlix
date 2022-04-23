import { createContext, useState } from "react";

import { StaticDataMovies } from "../../utils/StaticDataMovies";

export const MoviesContext = createContext();

export function MoviesContextProvider(props) {
  const [DataMovies, setDataMovies] = useState(StaticDataMovies);

  return (
    <MoviesContext.Provider value={DataMovies}>
      {props.children}
    </MoviesContext.Provider>
  );
}
