import React from "react";
import exit from "../../../assets/exit.png";

import { ContainerWarning, ExitDelete } from "./styles";

interface Props {
  setWarning?: any;
}

const ModalWarning = ({setWarning} : Props) => (
  <ContainerWarning>
    <ExitDelete onClick={() => 
      setWarning(false)} 
      src={exit} alt="Sair" />
      <p>
        Apenas os cards novos podem ser excluídos ou editados.
      </p>
  </ContainerWarning>
);


export default ModalWarning;