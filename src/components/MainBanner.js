import styled from "styled-components/macro";
import IconLikedMovie from "../assets/IconLikedMovie.png";
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

  margin-left: 2rem;
`;

const LikedMovieItem = styled.img`
  margin-bottom: 10px;
`;

const SubTitleMovie = styled.h3`
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
`;

export function MainBanner(props) {
  console.log("props", props.SelectedBannerMovie);

  const DataMovie = props.SelectedBannerMovie;

  return (
    <Container>
      <ContainerImagem>
        <img
          src={`https://image.tmdb.org/t/p/w500/${DataMovie.backdrop_path}`}
        />
      </ContainerImagem>

      <ContainerData>
        <LikedMovieItem src={IconLikedMovie} />
        <SubTitleMovie>Visto recentemente</SubTitleMovie>
        <TitleMovie>{DataMovie.title}</TitleMovie>
        <OverviewMovie>{DataMovie.overview}</OverviewMovie>

        <ContainerNotes>
          <p>4/5</p> <img src={IconNoteMovieLike} />
        </ContainerNotes>
      </ContainerData>
    </Container>
  );
}
