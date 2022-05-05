import { useContext } from "react";
import styled from "styled-components/macro";

import Modal from "react-modal";
import { MoviesContext } from "./context/MoviesContext";
import { FavButton } from "./FavButton";

const MovieImage = styled.img`
  width: 335px;
  height: 191px;
  border-radius: 4px;
`;

const ContainerOptions = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
`;

const ItemWatched = styled.div`
  padding: 4px 9px;
  border-radius: 2px;
  font-size: 15px;
  text-transform: uppercase;

  background-color: #80808066;
  color: #ffffffb0;

  margin-right: 10px;
`;

const Title = styled.h3`
  margin-top: 20px;
  font-size: 20px;
  align-self: flex-start;
  font-weight: 100;
`;

const Overview = styled.p`
  font-size: 15px;
  margin-top: 10px;
  line-height: 18px;
`;

const ContainerNotesMovie = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > img {
    position: relative;
    top: -3px;
    margin-left: 4px;
  }
`;

export function MoviesModal(props) {
  const SelectedMovieData = useContext(MoviesContext).DataContextSelectedMovie;

  return (
    <Modal
      className="content-modal"
      overlayClassName="overlay-modal"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      appElement={document.getElementById("root")}
    >
      <MovieImage src={SelectedMovieData.static_path} />
      <ContainerOptions>
        {SelectedMovieData.isWatch ? (
          <ItemWatched>Já Assisti</ItemWatched>
        ) : (
          <ItemWatched>Não assisti</ItemWatched>
        )}
        <FavButton
          isFav={SelectedMovieData.user_liked}
          DataFilms={SelectedMovieData}
        />
      </ContainerOptions>
      <Title>{SelectedMovieData.title}</Title>
      <Overview>{SelectedMovieData.overview}</Overview>
      {/* <ContainerNotesMovie>
        <p>4/5</p> <img src={IconNoteMovieLike} />
      </ContainerNotesMovie> */}
    </Modal>
  );
}

// Adicionar Botão de fechar o modal.

// Adicionar funcionalidade do modal de edição.

// Adicionar funcionalidade da biblioteca de notas.

// Adicionar funcionalidade do modal no card do banner.
