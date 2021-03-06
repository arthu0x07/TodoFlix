import styled from "styled-components/macro";

import { FavButton } from "./FavButton";

import IconNoteMovieLike from "../assets/IconNoteMovieLike.png";

const Container = styled.main`
  width: 100%;
  /* border: 1px solid red; */
  min-height: 21rem;
  height: 336px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  margin-top: 3.5rem;
`;

const ContainerImagem = styled.div`
  /* border: 1px solid green; */

  width: 425px;
  height: 242px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ContainerData = styled.div`
  /* border: 1px solid blue; */

  width: 445px;
  /* height: 282px; */

  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  margin-left: 3rem;
`;

const LikedMovieItem = styled.img`
  margin-bottom: 10px;
  width: 25px;
  opacity: ${({ isFav }) => (isFav ? 1 : 0.2)};
`;

const SubTitleMovie = styled.h3`
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 16px;
`;

const TitleMovie = styled.h2`
  margin-bottom: 10px;

  font-size: 30px;
`;

const OverviewMovie = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  height: auto;
  max-height: 76px;
  overflow: hidden;

  transition: all ease 1.3s;

  :hover {
    transition: all ease 1.3s;

    max-height: 1000px;
  }
`;

const ContainerNotes = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  width: 40px;
  align-items: center;

  > img {
    position: relative;
    top: -2px;
  }
`;

export function MainBanner(props) {
  const DataBannerMovie = props.SelectedBannerMovie;

  return (
    <Container>
      <ContainerImagem onClick={() => console.log("testing")}>
        <img src={DataBannerMovie.static_path} />
      </ContainerImagem>

      <ContainerData>
        <FavButton
          isFav={DataBannerMovie.user_liked}
          DataFilms={DataBannerMovie}
        />
        <SubTitleMovie>Visto recentemente</SubTitleMovie>
        <TitleMovie>{DataBannerMovie.title}</TitleMovie>
        <OverviewMovie>{DataBannerMovie.overview}</OverviewMovie>

        <ContainerNotes>
          <p>4/5</p> <img src={IconNoteMovieLike} />
        </ContainerNotes>
      </ContainerData>
    </Container>
  );
}

// Puxar o contexto, atribuir a fun????o no bot??o de curtido...
// Passar a props do ID do filme pelo seu index...

// Adicionar funcionalidade de setar item selecionado aqui no banner tambem.
