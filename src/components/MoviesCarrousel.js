import styled from "styled-components/macro";
import Carousel from "react-elastic-carousel";

import { CardMovie } from "./CardMovie";

const Container = styled.section`
  position: relative;

  width: 100%;
  min-height: 240px;
  margin-top: 4rem;
  margin-bottom: 4rem;


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

  .rec-item-wrapper {
    border-radius: 10px;
    margin-left: 0.2rem;
    overflow: visible;
  }

  .rec-carousel {
    height: 300px !important;
    overflow-y: visible;
  }

  .rec-carousel-wrapper {
    height: 100%;
  }

  .rec-slider-container {
    margin: unset;
  }

  .rec-slider {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rec-arrow {
    position: absolute;
    border-radius: unset;
    height: 100%;
    z-index: 2;
    background-color: transparent;
    border: 0;
    box-shadow: unset !important;

    :hover:enabled {
      background-color: transparent;
    }

    :focus:enabled {
      background-color: transparent;
    }
  }

  .rec-arrow-right {
    right: -3rem;
  }

  .rec-arrow-left {
    left: -3rem;
  }

  a {
    border-radius: 5px;
  }
`;

export function MoviesCarrousel({ DataFilms }) {
  const properties = {
    itemsToShow: 4.6,
    pagination: false,
  };

  return (
    <Container>
      <h2>Destaques</h2>

      <Carousel {...properties}>
        {DataFilms.map((Movie) => {
          return <CardMovie ItemMovie={Movie} />;
        })}
      </Carousel>
    </Container>
  );
}
