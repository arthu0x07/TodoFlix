import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { MainBanner } from "../../components/MainBanner";
import { MoviesCarrousel } from "../../components/MoviesCarrousel";
import { MoviesContext } from "../../components/context/MoviesContext";
import { MoviesModal } from "../../components/MoviesModal";

import { SortNumber } from "../../utils/RandomNumber";

export function Home() {
  const MovieDataContext = useContext(MoviesContext);
  const DataFilms = MovieDataContext.DataContextMovies;

  const [SelectedBannerMovie, setSelectedBannerMovie] = useState();

  useEffect(() => {
    setSelectedBannerMovie(DataFilms[SortNumber(1, DataFilms.length)]);
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        {SelectedBannerMovie && (
          <MainBanner SelectedBannerMovie={SelectedBannerMovie} />
        )}
        {DataFilms && <MoviesCarrousel DataFilms={DataFilms} />}
        <MoviesModal
          isOpen={MovieDataContext.isModalOpen}
          onRequestClose={MovieDataContext.CloseModal}
        />
      </Wrapper>
    </>
  );
}

// Copiar a linha do Modal nas outras páginas e levar a chamada dos contextos tambem.
