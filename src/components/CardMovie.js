import styled from "styled-components/macro";

import { FavButton } from "../components/FavButton";

import IconNoteMovieLike from "../assets/IconNoteMovieLike.png";

const Container = styled.div`
  color: #ffffff;

  width: 260px;
  height: 260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  overflow: hidden;

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 30px;

    h3 {
      font-size: 16px;
    }

    > div {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      > img {
        position: relative;
        top: -3px;
        margin-left: 4px;
      }
    }
  }
`;

const ContainerImageCard = styled.div`
  position: relative;
  margin-bottom: 10px;

  > img {
    width: 100%;
    height: 148px;
    border-radius: 8px;
    object-fit: cover;
  }

  .favorite-button {
    position: absolute;
    top: 3px;
    right: 3px;
    width: 20px;
    height: 20px;
  }
`;

const Overview = styled.p`
  font-size: 12px;
  margin-top: 10px;
`;

export function CardMovie({ ItemMovie }) {
  function FormatTexts(title, Maxlimit = 18) {
    let limit = Maxlimit;
    let overlimit = title.length > limit;
    let dotOrEmpty = overlimit ? "..." : "";

    return title.substring(0, limit) + dotOrEmpty;
  }

  return (
    <Container className="Card-Container">
      {(ItemMovie.static_path != undefined) |
        (ItemMovie.static_path != null) && (
        <ContainerImageCard>
          <img src={ItemMovie.static_path} />
          <FavButton isFav={ItemMovie.user_liked} DataFilms={ItemMovie} />
        </ContainerImageCard>
      )}
      <div>
        <h3>{FormatTexts(ItemMovie.title)}</h3>
        <div>
          <p>4/5</p> <img src={IconNoteMovieLike} />
        </div>
      </div>
      <Overview>{FormatTexts(ItemMovie.overview, 150)}</Overview>
    </Container>
  );
}

// Fazer parte visual do card.
