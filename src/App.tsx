// import styled from 'styled-components';
import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

//  const Title = styled.h1` // é um componente
//   color: #8257e6;
// `;

Modal.setAppElement("#root") // acessibilidade

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
  // O estado estando no estdo pai fica de facil acesso passando infos por parametros. Se preciso que informlações sejam compartilhados por mais componentes, passo elas para componentes que estam em volta

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }
  return ( // Posso fazer componentes filhos alterar estados de componentes pais passando funções como props
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

// Usando default, na hora de chamar eu posso chamar oq eu importei com qualquer nome.
