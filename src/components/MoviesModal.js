import Modal from "react-modal";
import styled from "styled-components/macro";

export function MoviesModal(props) {
  console.log("dataModal", props);

  return (
    <Modal
      className="content-modal"
      overlayClassName="overlay-modal"
      isOpen={props.isOpen}
      onRequestClose={props.onRequestClose}
      appElement={document.getElementById("root")}
    >
      <h1
        onClick={() => {
          props.onRequestClose();
        }}
      >
        Hello World
      </h1>
    </Modal>
  );
}

// Estilizar ModalMovie e adicionar o evento nos clicks dos filmes...

// Criar ModalMovieEdit e adicionar evento no ModalMovie...

// Organizar melhor os contextos...

// Após terminar a aplicação base, começar a fase de melhorias com mudança de nomeclatura, reorganização de propriedades e objetos && implementação de features novas..
