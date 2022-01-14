import React, { useState, useEffect } from "react";
import api from "../../Api";

import defaultCard from "../../assets/default-card.svg";
import edit from "../../assets/edit.svg";
import trash from "../../assets/trash.svg";

import { 
  Button, 
  Buttons, 
  Card, 
  CircleImageCard, 
  Container, 
  Line, 
  TextCard 
} from "./styles";

interface Props {
  setWarning?: any;
  dataCard?: any;
  result?: any;
  setDataUpdate?: any;
  setDataDelete?: any;
  setIsOpen?: any;
}


const CardComponent = ({
  setWarning,
  dataCard,
  result,
  setDataUpdate,
  setDataDelete,
  setIsOpen,
}: Props) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    api
      .get(`pokemon/${result?.name}/`)
      .then((response) => setData(response?.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [result]); 

  return (
    <Container>
      <Card>
        <CircleImageCard>
          <img
            src={
              dataCard?.front_default?.preview
                ? dataCard?.front_default?.preview
                : data?.sprites?.front_default
                ? data?.sprites?.front_default
                : defaultCard
            }
            alt="Imagem do card"
          />
        </CircleImageCard>
        <Line />
        <TextCard>{dataCard?.name ? dataCard?.name : data?.name}</TextCard>
      </Card>
      <Buttons>
        <Button
          colorButtonRed
          onClick={() => {
            setDataDelete(dataCard);
            result && setWarning(true);
          }}
        >
          <img src={trash} alt="Icone de editar" />
          Excluir
        </Button>
        <Button
          onClick={() => {
            !data?.name && dataCard?.name && setIsOpen(true);
            result && setWarning(true);
            dataCard && setDataUpdate(dataCard);
          }}
          colorButtonOrange
        >
          <img src={edit} alt="Icone de excluir" />
          Editar
        </Button>
      </Buttons>
    </Container>
  );
};

export default CardComponent;
