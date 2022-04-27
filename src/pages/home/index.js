import { useEffect, useState, useContext } from "react";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { MainBanner } from "../../components/MainBanner";
import { MoviesCarrousel } from "../../components/MoviesCarrousel";
import { MoviesContext } from "../../components/context/MoviesContext";
import { SortNumber } from "../../utils/RandomNumber";

export function Home() {
  const MovieDataContext = useContext(MoviesContext);
  const [DataFilms, setDataFilms] = useState();
  const [SelectedBannerMovie, setSelectedBannerMovie] = useState();

  useEffect(() => {
    MovieDataContext.DataContextMovies &&
      setDataFilms(MovieDataContext.DataContextMovies);
  }, []);

  // useEffect(() => {
  //   async function FetchData() {
  //     let response = await api.get(
  //       `movie/top_rated?api_key=${API_KEY}&with_genres=28&language=pt-BR`
  //     );

  //     setDataFilms(response.data.results); // Vamos ter que percorrer esse array no futuro para criar um novo array no qual os filmes terão as opções de estar favoritados ou não...
  //   }

  //   FetchData();
  // }, []);

  useEffect(() => {
    if (DataFilms != undefined || DataFilms != null) {
      setSelectedBannerMovie(DataFilms[SortNumber(0, 4)]);
    }
  }, [DataFilms]);

  return (
    <>
      <Wrapper>
        <Header />
        {SelectedBannerMovie && (
          <MainBanner SelectedBannerMovie={SelectedBannerMovie} />
        )}
        {DataFilms && <MoviesCarrousel DataFilms={DataFilms} />}
      </Wrapper>
    </>
  );
}
