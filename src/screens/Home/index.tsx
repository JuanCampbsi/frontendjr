import React, { useState, useEffect } from "react";

import { useQuery } from "react-query";

import logo from '../../assets/logo.png';
import trash from "../../assets/trash.svg";
import search from "../../assets/search.svg";
import exit from "../../assets/exit.png";

import Button from "../../components/Button";
import Card from "../../components/Card";
import api from "../../Api";
import BaseModal from "../../components/BaseModal";
import CreateCard from "../../components/CreateCard/index";

import { 
  ButtonSearch,
  Container,
  ContainerButtons,
  ContainerCards,
  ContainerDelete,
  ContainerPaginate,
  ContainerSearch,
  ContainerWarning,
  ExitDelete, 
  GroupCards, 
  Header, 
  HeaderCards, 
  IconDelete, 
  Line, 
  Logo, 
  Message, 
  Paginate, 
  Search, 
  SearchLabel, 
  TextDelete, 
  TitleCards, 
  TitleDelete,
  ButtonSearchContainer
 } from "./styles";


export function Home(){
  const [pokemonList, setPokemonList] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const [newCard, setNewCard] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [dataDelete, setDataDelete] = useState<any>([]);
  const [dataUpdate, setDataUpdate] = useState<any>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [warning, setWarning] = useState(false);
  const [endPointRequest, setEndPointRequest] = useState("pokemon?limit=20");

  const pokemonRequest = useQuery("pokemonRequest", async () => {
    const { data }: any = await api
      .get(endPointRequest)
      .then((response) => response)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);       
      });

    return data;
  });

  useEffect(() => {
    pokemonRequest.refetch();
  }, [endPointRequest]); 

  useEffect(() => {
    setPokemonList(pokemonRequest?.data?.results || []);
  }, [pokemonRequest?.data]); 

  useEffect(() => {
    setDataSearch([...newCard]);
  }, [newCard]); 

  const handleChange = (text) => {
    const { value } = text.target;
    setValueSearch(value);
   
    const search = pokemonList.filter((item) => {
      return !item.name.toLowerCase().indexOf(value.toLowerCase());
    });

    if (value === "") {
      setDataSearch([...newCard]);
    } else {
      setDataSearch(search);
    }
  };

  const handleAdd = (value) => {
    setNewCard([...newCard, value]);
  };

  const handleUpdate = (value) => {
    const updated = newCard.map((card) =>
      card.name === dataUpdate.name ||
      card.front_default === dataUpdate.front_default
        ? {
            ...card,
            name: value.name,
            front_default: value.front_default,
          }
        : card
    );

    setNewCard(updated);
  };

  const handleDelete = () => {
    const value:any = dataDelete;

    setNewCard(
      newCard.filter(
        (item) => item.name !== value.name || item.front_default !== value.front_default
      )
    );

    setDataSearch([...newCard]);
  };

  const ModalWarning = () => (
    <ContainerWarning>
      <ExitDelete onClick={() => setWarning(false)} src={exit} alt="Sair" />
      <p>
        Apenas os cards novos podem ser excluídos ou editados.
      </p>
    </ContainerWarning>
  );

  const ModalDelete = () => (
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

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo do site" />
      </Header>
      <ContainerSearch>
        <SearchLabel>
          <Search
            value={valueSearch}
            onChange={(value) => handleChange(value)}
            placeholder="Digite aqui sua busca..."
          />
           <ButtonSearchContainer onChange={handleChange}>
            <ButtonSearch src={search} alt="Lupa de busca" />
          </ButtonSearchContainer>

        </SearchLabel>
      </ContainerSearch>
      <ContainerCards>
        <HeaderCards>
          <TitleCards>Resultado da busca</TitleCards>
          <Button
            widthButton={window.innerWidth <= 648 && "50%"}
            paddingButton={window.innerWidth <= 648 && "0"}
            funcAction={() => setIsOpen(true)}
          >
            Novo Card
          </Button>
        </HeaderCards>
        <GroupCards>
          {!dataSearch.length && !pokemonList.length ? (
            <Message>
              <p>Nenhum resultado encontrado.</p>
            </Message>
          ) : (
            <>
              {dataSearch.map((item) => {
                if (!item) return null;
                return (
                  <Card
                    key={Math.random().toString(36).substr(2, 9)}
                    setDataDelete={setDataDelete}
                    dataCard={item}
                    setIsOpen={setIsOpen}
                    setWarning={setWarning}
                    setDataUpdate={setDataUpdate}
                  />
                );
              })}
              {valueSearch === "" &&
                pokemonList.map((item) => {
                  if (!item) return null;

                  return (
                    <Card
                      key={Math.random().toString(36).substr(2, 9)}
                      setDataDelete={setDataDelete}
                      result={item}
                      setIsOpen={setIsOpen}
                      setWarning={setWarning}
                    />
                  );
                })}
            </>
          )}
        </GroupCards>
      </ContainerCards>
      
      {(isOpen) && (
        <BaseModal
          closeModal={() => {
            setTimeout(() => {
              setIsOpen(false);
              setAnimation(false);
              setDataUpdate([]);
            }, 400);
            setAnimation(true);
          }}
        >
          <CreateCard
            handleAdd={handleAdd}
            animation={animation}
            handleUpdate={handleUpdate}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            closeModal={() => {
              setTimeout(() => {
                setIsOpen(false);
                setAnimation(false);
                setDataUpdate([]);
              }, 400);
              setAnimation(true);
            }}
          />
        </BaseModal>
      )}
      {(dataDelete?.name || dataDelete?.front_default?.name) && (
        <BaseModal closeModal={() => setDataDelete([])}>
          {ModalDelete()}
        </BaseModal>
      )}
      {warning && (
        <BaseModal closeModal={() => setWarning(false)}>
          {ModalWarning()}
        </BaseModal>
      )}
    </Container>
  );
};

export default Home;
