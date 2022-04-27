import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { MoviesContext } from "../../components/context/MoviesContext";
import { ContainerCards } from "../../components/ContainerCard";
import { CardMovie } from "../../components/CardMovie";

export function AlreadySeen() {
  const MovieDataContext = useContext(MoviesContext);

  const [DataFilms, setDataFilms] = useState();

  useEffect(() => {
    MovieDataContext.DataContextMovies &&
      setDataFilms(MovieDataContext.DataContextMovies);
  }, []);

  console.log("Alreadyseen", MovieDataContext.DataContextMovies);

  return (
    <>
      <Header />
      <ContainerCards title="Já vistos">
        {(DataFilms != null) | (DataFilms != undefined) &&
          DataFilms.map((Movie) => {
            return <CardMovie ItemMovie={Movie} />;
          })}
      </ContainerCards>
    </>
  );
}
