import { useContext } from "react";
import styled from "styled-components/macro";

import { MoviesContext } from "../components/context/MoviesContext";

import IconLikedMovie from "../assets/IconLikedMovie.png";

const LikedMovieItem = styled.img`
  width: 22px;
  height: 22px;
  opacity: ${({ isFav }) => (isFav ? 1 : 0.2)};
`;

export function FavButton(props) {
  const MovieDataContext = useContext(MoviesContext);
  const setFavMovie = MovieDataContext.setFavMovie;

  const DataFilms = props.DataFilms;

  return (
    <LikedMovieItem
      src={IconLikedMovie}
      onClick={() => {
        setFavMovie(DataFilms.id); // Props
      }}
      isFav={DataFilms.user_liked}
      className="favorite-button"
    />
  );
}
