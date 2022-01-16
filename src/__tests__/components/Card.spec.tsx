import { render } from "@testing-library/react";
import Card from "../../components/Card";

describe("Button component", () =>{
  it('should be able to render logo', () => {
    render(
    <Card />
    );
  });
})