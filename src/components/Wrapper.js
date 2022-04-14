import styled from "styled-components/macro";

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1366px;
  margin: 0 auto;
`;

export function Wrapper(props) {
  return <ContainerWrapper>{props.children}</ContainerWrapper>;
}
