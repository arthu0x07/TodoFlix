import styled from "styled-components/macro";

// Importar o Slide

import { CardMovie } from "./CardMovie";

const Container = styled.section`
  position: relative;

  width: 100%;  
  min-height: 240px;
  margin-top: 4rem;

  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  // Vai virar um carrosel...7

  > h2 {
    position: absolute;
    top: -2rem;
    color: #ffffff;
    font-size: 18px;
  }

  .Card-Container {
    margin-right: 10px;
  }

  .Card-Container:last-child {
    margin-right: initial;
  }
`;

export function MoviesCarrousel({ DataFilms }) {
  return (
    <Container>
      <h2>Destaques</h2>

      {DataFilms.map((Movie) => {
        return <CardMovie ItemMovie={Movie} />;
      })}
    </Container>
  );
}
