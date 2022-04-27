import styled from "styled-components/macro";

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

  > img {
    width: 100%;
    height: 148px;
  }

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
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
      (ItemMovie.static_path != null) ? (
        <img src={ItemMovie.static_path} />
      ) : (
        (ItemMovie.static_path != undefined) |
          (ItemMovie.static_path != null) && (
          <img
            src={`https://image.tmdb.org/t/p/w500/${ItemMovie.backdrop_path}`}
          />
        )
      )}

      {/* <img src={`https://image.tmdb.org/t/p/w500/${ItemMovie.backdrop_path}`} /> */}
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
