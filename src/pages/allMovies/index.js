import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { MoviesContext } from "../../components/context/MoviesContext";
import { ContainerCards } from "../../components/ContainerCard";
import { CardMovie } from "../../components/CardMovie";
import { Wrapper } from "../../components/Wrapper";
import { MoviesModal } from "../../components/MoviesModal";

export function AllMovies() {
  const MovieDataContext = useContext(MoviesContext);

  const [DataFilms, setDataFilms] = useState();
  const [QueryMovies, setQueryMovies] = useState();

  useEffect(() => {
    MovieDataContext.DataContextMovies &&
      setDataFilms(MovieDataContext.DataContextMovies);
  }, []);

  useEffect(() => {
    console.log("debug - querymovies ", QueryMovies);
  }, [QueryMovies]);

  console.log("Todos", MovieDataContext.DataContextMovies);

  return (
    <>
      <Wrapper>
        <Header setQueryMovies={setQueryMovies} />
        <ContainerCards title="Todos">
          {QueryMovies == undefined || QueryMovies == null || QueryMovies == ""
            ? (DataFilms != null) | (DataFilms != undefined) &&
              DataFilms.map((Movie) => {
                return <CardMovie ItemMovie={Movie} />;
              })
            : DataFilms.map((Movie) => {
                if (
                  Movie.title
                    .toLowerCase()
                    .includes(QueryMovies.toLocaleLowerCase())
                ){
                  return <CardMovie ItemMovie={Movie} />;
                }
              })}
        </ContainerCards>
        <MoviesModal
          isOpen={MovieDataContext.isModalOpen}
          onRequestClose={MovieDataContext.CloseModal}
        />
      </Wrapper>
    </>
  );
}
