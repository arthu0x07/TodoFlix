import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { MoviesContext } from "../../components/context/MoviesContext";
import { ContainerCards } from "../../components/ContainerCard";
import { CardMovie } from "../../components/CardMovie";
import { Wrapper } from "../../components/Wrapper";
import { MoviesModal } from "../../components/MoviesModal";

export function Likeds() {
  const MovieDataContext = useContext(MoviesContext);

  const [DataFilms, setDataFilms] = useState();

  useEffect(() => {
    MovieDataContext.DataContextMovies &&
      setDataFilms(MovieDataContext.DataContextMovies);
  }, []);

  console.log("likdes", MovieDataContext.DataContextMovies);

  return (
    <>
      <Wrapper>
        <Header />
        <ContainerCards title="Curtidos">
          {(DataFilms != null) | (DataFilms != undefined) &&
            DataFilms.map((Movie) => {
              if (Movie.user_liked == true) {
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
