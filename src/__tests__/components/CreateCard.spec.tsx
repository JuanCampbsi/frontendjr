import { render, screen} from "@testing-library/react";
import CreateCard from "../../components/CreateCard";


describe("CreateCard component", () =>{
  it('renders corretly', () => {
    render(
    <CreateCard dataUpdate={{name:''}}/>
    );   
  });

  it('Info corretly', () => {
    render(
    <CreateCard dataUpdate={{name:''}}/>
    );
    expect(screen.getByText('INCLUA UMA IMAGEM PARA APARECER NO CARD'))
    expect(screen.getByText('DIGITE UM NOME PARA O CARD'))
    expect(screen.getByText('Nenhum arquivo selecionado'))
    expect(screen.getByText('Escolher arquivo'))
  });
})