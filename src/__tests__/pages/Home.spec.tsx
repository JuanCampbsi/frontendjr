import { render, screen } from "@testing-library/react";
import Home from "../../screens/Home";

jest.mock('react-query', () => {
  return {
    useQuery(){
      return [null, false]
    }
  }
})

describe("Home component", () =>{
  it('should be able to render data', () => {
    render(<Home/>);
  });

  it('Info data', () => {
    render(<Home/>);

    expect(screen.getByText('Novo Card'))
  });
})