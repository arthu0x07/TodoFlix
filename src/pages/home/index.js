import { useContext, useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { MainBanner } from "../../components/MainBanner";
import { MoviesCarrousel } from "../../components/MoviesCarrousel";
import { MoviesContext } from "../../components/context/MoviesContext";
import { SortNumber } from "../../utils/RandomNumber";

export function Home() {
  const MovieDataContext = useContext(MoviesContext);
  const setFavMovie = MovieDataContext.setFavMovie;
  const DataFilms = MovieDataContext.DataContextMovies;
  const [SelectedBannerMovie, setSelectedBannerMovie] = useState();

  useEffect(() => {
    setSelectedBannerMovie(DataFilms[SortNumber(1, 4)]);
  }, []);

  return (
    <>
      <Wrapper>
        <Header />
        {SelectedBannerMovie && (
          <MainBanner
            SelectedBannerMovie={SelectedBannerMovie}
            setFavMovie={setFavMovie}
          />
        )}
        {DataFilms && <MoviesCarrousel DataFilms={DataFilms} />}
      </Wrapper>
    </>
  );
}
