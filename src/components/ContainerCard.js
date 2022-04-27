import styled from "styled-components/macro";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3rem;
`;

const Title = styled.h2`
  font-size: 29px;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 100;
`;

const ContainerC = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    margin: 0 1rem 2rem 0;
  }
`;

export function ContainerCards(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <ContainerC>{props.children}</ContainerC>
    </Container>
  );
}
