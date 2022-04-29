import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { ContainerCards } from "../../components/ContainerCard";
import { CardMovie } from "../../components/CardMovie";
import { Wrapper } from "../../components/Wrapper";
import { MoviesContext } from "../../components/context/MoviesContext";
import { MoviesModal } from "../../components/MoviesModal";

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
      <Wrapper>
        <Header />
        <ContainerCards title="Já vistos">
          {(DataFilms != null) | (DataFilms != undefined) &&
            DataFilms.map((Movie) => {
              if (Movie.already_seen == true) {
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
