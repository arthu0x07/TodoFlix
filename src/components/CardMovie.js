import styled from "styled-components/macro";

import IconNoteMovieLike from "../assets/IconNoteMovieLike.png";

const Container = styled.div`
  color: #ffffff;
  border: 1px solid whitesmoke;

  width: 260px;
  height: 240px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  > img {
    width: 100%;
    height: 148px;
  }

  > div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 16px;
    }

    > div{
        display: flex;
        justify-content: flex-start;
        align-items: center;

        > img{
            position: relative;
            top: -2px;
        }
    }
  }
`;

export function CardMovie({ ItemMovie }) {
  console.log(ItemMovie.title);

  return (
    <Container className="Card-Container">
      <img src={`https://image.tmdb.org/t/p/w500/${ItemMovie.backdrop_path}`} />
      <div>
        <h3>Movie Title</h3>
        <div>
          <p>4/5</p> <img src={IconNoteMovieLike} />
        </div>
      </div>
    </Container>
  );
}

// Fazer parte visual do card.
