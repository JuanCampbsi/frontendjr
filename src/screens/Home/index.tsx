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

export function Home() {
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [valueSearch, setValueSearch] = useState("");
  const [newCard, setNewCard] = useState([]);
  const [dataSearch, setDataSearch] = useState<any>([]);
  const [dataSearchNew, setDataSearchNew] = useState<any>([]);
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
    setPokemonList(pokemonRequest?.data?.results || []);
    setDataSearch([...newCard]);
  }, [endPointRequest, pokemonRequest?.data, newCard]);


  function handleChange(e) {
    const { value } = e.target;
    setValueSearch(value);
    setDataSearchNew([...pokemonList])

    const search = dataSearch.filter((item) => {
      return !item.name.toLowerCase().indexOf(value.toLowerCase());
    });

    const searchNew = dataSearchNew.filter((item) => {
      return !item.name.toLowerCase().indexOf(value.toLowerCase());
    });

    if (value === "") {
      setDataSearch([...newCard]);
    } else {
      setDataSearch(search);
      setDataSearchNew(searchNew)
    }
  };

  function handleAdd(value) {
    setNewCard([...newCard, value]);
  };

  function handleUpdate(value) {
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

  function handleDelete() {
    const value: any = dataDelete;

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
          <ButtonSearchContainer>
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
                    setWarning={false}
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
                })
              }

              {
                dataSearchNew.map((item) => {
                  if (!item) return null;
                  return (
                    <Card
                      key={Math.random().toString(36).substr(2, 9)}
                      setDataDelete={setDataDelete}
                      dataCard={item}
                      result={item}
                      setIsOpen={setIsOpen}
                      setWarning={setWarning}
                    />
                  );
                })
              }
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