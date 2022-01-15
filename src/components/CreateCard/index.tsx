import React, { useState } from "react";

import {
  Container,
  ExitDelete,
  Header,
  HeaderImage,
  HeaderTitle,
  Input,
  Label,
  RowHeader,
  TitleInput,
  Line
} from "./styles";

import Button from "../Button";
import createCard from "../../assets/create.svg";

import exit from "../../assets/exit.png";

interface CardProps {
  handleAdd: any;
  closeModal: any;
  animation?: any;
  dataUpdate: any;
  setDataUpdate: any;
  handleUpdate: any;
}

function CreateCard({
  handleAdd,
  closeModal,
  animation,
  dataUpdate,
  setDataUpdate,
  handleUpdate
}: CardProps) {

  const [newCard, setNewCard] = useState<any>({});

  const selectFile = () => {
    let element: any = document.querySelector('input[type="file"]');
    element.click();
  };

  const handleChange = (field: any, value: any) => {
    const newValue = value.target.value;
    const file = field === "front_default" && value.target.files[0];

    if (field === "front_default") {
      setNewCard({
        ...newCard,
        front_default: {
          preview: URL.createObjectURL(file),
          name: file.name,
        },
      });
    }
    if (field === "name") {
      setNewCard({
        ...newCard,
        name: newValue,
      });
    }
  };

  const handleCreateCard = (e: any) => {
    if (e.keyCode === 13) {
      handleAdd(newCard);
      closeModal();
    }
  };

  const checkValidate = () => {
    if (!newCard.name) {
      return false;
    }
    return true;
  };

  return (
    <Container
      onClick={(value) => value.stopPropagation()}
      onKeyDown={(value) => handleCreateCard(value)}
    >
      <Header>
        {window.innerWidth <= 648 && (
          <ExitDelete onClick={() => closeModal()} src={exit} alt="Sair" />
        )}
        <RowHeader>
          <HeaderImage src={createCard} alt="Icone de criar card" />
          <HeaderTitle>Criar Card</HeaderTitle>
        </RowHeader>
        <Line />
      </Header>
      <TitleInput>DIGITE UM NOME PARA O CARD</TitleInput>
      <Input
        onChange={(value) => handleChange("name", value)}
        value={newCard.name}
        type="text"
        placeholder="Digite o título"
      />
      <TitleInput>INCLUA UMA IMAGEM PARA APARECER NO CARD</TitleInput>
      {window.innerWidth > 648 && (
        <Label htmlFor="upload-file">
          <p>
            {newCard?.front_default?.name
              ? newCard?.front_default?.name
              : "Nenhum arquivo selecionado"}
          </p>
          <Button
            funcAction={() => selectFile()}
            positionButton="absolute"
            rightButton=".5rem"
            topButton=".2rem"
            backgroundButton="var(--color_white)"
            borderButton="0.0625rem solid var(--color_orange)"
            colorButton="var(--color_orange)"
          >
            Escolher arquivo
          </Button>
        </Label>
      )}
      <Input
        onChange={(value) => handleChange("front_default", value)}
        accept="image/*"
        id="upload-file"
        type="file"
      />
      {window.innerWidth <= 648 && (
        <Button
          funcAction={() => selectFile()}
          rightButton=".5rem"
          topButton=".2rem"
          backgroundButton="var(--color_white)"
          borderButton="0.0625rem solid var(--color_orange)"
          colorButton="var(--color_orange)"
        >
          {newCard?.front_default?.name
            ? newCard?.front_default?.name
            : "Escolher arquivo"}
        </Button>
      )}
      <Line marginBottom="1.625rem" />
      <Button
          funcAction={() => {
          dataUpdate.name ? handleUpdate(newCard) : handleAdd(newCard);
          closeModal();
          setDataUpdate([]);
        }}
        alignSelfButton="flex-end"
        widthButton="10.4375rem"
        paddingButton="0"
        disabled={
          dataUpdate.name || dataUpdate.front_default ? false : !checkValidate()
        }
      >
        {dataUpdate.name ? "Editar Card" : "Criar Card"}
      </Button>
    </Container>
  );
}

export default CreateCard;