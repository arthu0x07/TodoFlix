import { useContext } from "react";

import styled from "styled-components/macro";
import IconLikedMovie from "../assets/IconLikedMovie.png";

import { MoviesContext } from "../components/context/MoviesContext";

const LikedMovieItem = styled.img`
  margin-bottom: 10px;
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
