import React from "react";

import Button from "../../../components/Button";
import trash from "../../../assets/trash.svg";
import exit from "../../../assets/exit.png";

import { 
  ContainerButtons, 
  ContainerDelete, 
  ExitDelete, 
  IconDelete, 
  Line, 
  TextDelete, 
  TitleDelete } from "./styles";
  

interface Props{
  setDataDelete?: any;
  handleDelete?: () => void;
}

const ModalDelete = ({setDataDelete, handleDelete}: Props) => (
  <ContainerDelete>
    <ExitDelete onClick={() => setDataDelete([])} src={exit} alt="Sair" />
      <IconDelete>
        <img src={trash} alt="Icone de excluir" />
      </IconDelete>
      <TitleDelete>Excluir</TitleDelete>
      <TextDelete>CERTEZA QUE DESEJA EXCLUIR?</TextDelete>
    <Line />

    <ContainerButtons>
      <Button
        widthButton="48%"
        backgroundButton="var(--color_red)"
        funcAction={() => handleDelete()}
      >
        Excluir
      </Button>
      <Button
        widthButton="48%"
        colorButton="var(--color_red)"
        backgroundButton="var(--color_white)"
        borderButton=".0625rem solid var(--color_red)"
        funcAction={() => setDataDelete([])}
      >
        Cancelar
      </Button>
    </ContainerButtons>
  </ContainerDelete>
);

export default ModalDelete;