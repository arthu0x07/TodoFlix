import styled from "styled-components/macro";

import LogoHeaderTodoFlix from "../assets/LogoHeader-TodoFlix.png";
import SetaMenuCategorias from "../assets/SetaMenuCategorias.png";
import IconSearchInput from "../assets/IconSearchInput.png";
import IconProfilePurple from "../assets/IconProfilePurple.png";

const Container = styled.header`
  width: 100%;
  height: 6rem;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;

  > img {
    width: auto;
    height: 48px;
    filter: contrast(1.);
  }

  .Container-Header-Menu {
    > ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      font-weight: bold;
    }
  }

  .Container-Header-SelectItem {
    width: 6rem;
    background: no-repeat 5rem center url(${SetaMenuCategorias});
    position: relative;
    font-weight: 100;
    margin-left: 1rem;

    :hover .Container-Categories {
      display: flex;
    }
  }

  .Container-Categories {
    position: absolute;
    width: 10rem;
    height: 9rem;
    background: transparent;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: #ffffff;
    padding-top: 2rem;

    li {
      margin-bottom: 1rem;
      font-weight: lighter;
      font-size: 14px;
    }

    :hover {
      display: flex;
    }
  }
`;

// ----------------------------------------------

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 600px;
  height: 100%;
`;

const ButtonAddFilm = styled.button`
  padding: 0.5rem 1rem;
  color: #ffffff;
  font-size: 14px;
  background: #e71b27 0% 0% no-repeat padding-box;
  border-radius: 4px;
  border: 0px;
  width: 150px;
  margin-right: 1rem;

  cursor: pointer;
`;

const ContainerInput = styled.div`
  width: 400px;
  height: 32px;
  margin-left: 0.2rem;
  background: url(${IconSearchInput}) no-repeat 5px center;

  overflow: visible;

  background-color: #2c2c2c;
  border-radius: 4px;

  display: flex;
  justify-content: flex-end;

  input {
    height: 100%;
    width: calc(100% - 30px);
    background: transparent;
    border: 0;
    outline: 0 !important;
    color: #ffffff;
  }
`;

const ContainerProfilePhoto = styled.div`
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export function Header() {
  return (
    <Container>
      <LogoContainer>
        <img src={LogoHeaderTodoFlix} />

        <nav className="Container-Header-Menu">
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li className="Container-Header-SelectItem">
              <a>Categorias</a>
              <ul className="Container-Categories"> {/* Adicionar os Links aqui.. criar as rotas... */}
                <li>Todos</li>
                <li>Favoritos</li>
                <li>Já vistos</li>
                <li>Adicionados</li>
              </ul>
            </li>
          </ul>
        </nav>
      </LogoContainer>

      <InputContainer>
        <ButtonAddFilm>Adicionar Filme</ButtonAddFilm>
        <ContainerInput>
          <input type="text" placeholder="Pesquisar" />
        </ContainerInput>
        <ContainerProfilePhoto>
          <img src={IconProfilePurple} />
          <img src={SetaMenuCategorias} />
        </ContainerProfilePhoto>
      </InputContainer>
    </Container>
  );
}
