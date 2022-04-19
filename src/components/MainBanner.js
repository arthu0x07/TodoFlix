import styled from "styled-components/macro";

const Container = styled.main`
  width: 100%;
  border: 1px solid red;
  min-height: 21rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const ContainerImagem = styled.main`
  border: 1px solid green;

  width: 425px;
  height: 242px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ContainerData = styled.main`
  width: 425px;
  height: 242px;

  border: 1px solid blue;
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
        {/* 
            Icon - Add in Final Array
            Seção do filme... Visto recentemente? - Add in Final Array
            Titulo - .title
            Descrição - .overview
            Quantidade de estrelas / Likes... - 8.4 -> Usar isso aqui na hora de implementar as estrelas, pois a quantidade de likes vai ter de funcionar com esses valores e com os valores que o usuário adicionar, sendo assim: Fazer uma função que recebe o tipo de input da quantidade de estrelas, diferenciando a atribuição automática vindo da API e a atribuição vindo manualmente pelo usuário.
        */}

        <img />
        <h3>Visto Recentemente</h3>
        <h2>Capitão Fantástico</h2>
        <p>
          Nas florestas do estado de Washington, um pai cria seus seis filhos
          longe da civilização, em uma rígida rotina de aventuras. Ele é forçado
          a deixar o isolamento e leva sua família para encarar o mundo,
          desafiando sua ideia do que significa ser pai.
        </p>

        <div>
          <p>4/5</p>
          <img src={} />
        </div>
      </ContainerData>
    </Container>
  );
}
