import React, { useState, useEffect } from "react";

import { useQuery } from "react-query";

import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";


import Button from "../../components/Button";
import Card from "../../components/Card";
import api from "../../Api";
import BaseModal from "../../components/BaseModal";
import CreateCard from "../../components/CreateCard/index";
import ModalDelete from "../Modal/ModalDelete";
import ModalWarning from "../Modal/ModalWarning";

import { 
  ButtonSearch,
  Container,
  ContainerCards,
  ContainerSearch,
  GroupCards, 
  Header, 
  HeaderCards, 
  Logo, 
  Message, 
  Search, 
  SearchLabel, 
  TitleCards, 
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
  const [endPointRequest, setEndPointRequest] = useState("pokemon?limit=16");

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
              { dataSearch.map((item) => {
                if (!item) return null;
                return (
                  <Card
                    key={Math.random().toString(36).substr(2, 9)}
                    setDataDelete={setDataDelete}
                    result={item}       
                    setIsOpen={setIsOpen}
                    setWarning={setWarning}
                    setDataUpdate={setDataUpdate}
                  />
                );
              })}

              { valueSearch === "" &&
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
          {
            <ModalDelete
             setDataDelete={setDataDelete}
             handleDelete={handleDelete}
            />
          }
        </BaseModal>
      )}
      {warning && (
        <BaseModal closeModal={() => setWarning(false)}>
          { 
            <ModalWarning
              setWarning={setWarning}
            />
          }
        </BaseModal>
      )}
    </Container>
  );
};

export default Home;