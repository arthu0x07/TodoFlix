import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { MoviesContext } from "../../components/context/MoviesContext";
import { ContainerCards } from "../../components/ContainerCard";
import { CardMovie } from "../../components/CardMovie";

export function AllMovies() {
  const MovieDataContext = useContext(MoviesContext);

  const [DataFilms, setDataFilms] = useState();

  useEffect(() => {
    MovieDataContext.DataContextMovies &&
      setDataFilms(MovieDataContext.DataContextMovies);
  }, []);

  console.log("Todos", MovieDataContext.DataContextMovies);

  return (
    <>
      <Header />
      <ContainerCards title="Todos">
        {(DataFilms != null) | (DataFilms != undefined) &&
          DataFilms.map((Movie) => {
            return <CardMovie ItemMovie={Movie} />;
          })}
      </ContainerCards>
    </>
  );
}
