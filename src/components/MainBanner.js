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

  margin-left: 3rem;
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
  justify-content: space-between;
  width: 40px;
  align-items: center;

  > img {
    position: relative;
    top: -2px;
  }
`;

  // Props Estão chegando undefined...

export function MainBanner(props) {
  const DataBannerMovie = props.SelectedBannerMovie;

  return (
    <Container>
      <ContainerImagem>
        {/* <img
          src={`https://image.tmdb.org/t/p/w500/${DataBannerMovie.backdrop_path}`}
        /> */}

        <img src={DataBannerMovie.static_path} />
      </ContainerImagem>

      <ContainerData>
        <LikedMovieItem src={IconLikedMovie} />
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
