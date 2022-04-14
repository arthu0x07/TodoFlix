import styled from "styled-components/macro";

import { api } from "../services/api/api";

const Container = styled.main`
  width: 100%;
  border: 1px solid red;
  min-height: 21rem;
`;

export function MainBanner(props) {
  console.log(api.get("movie/latest?api_key=abc7e81d2fa1e07cb468125122faf0d7&language=pt-BR")); // Funcionando, porém, com o ENDPOINT errado, fazer o endpoint de puxar um filme em destaque...

  return <Container></Container>;
}
