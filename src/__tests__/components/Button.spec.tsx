import { render } from "@testing-library/react";
import { Button } from "../../components/Button";

describe("Button component", () =>{
  it('should be able to render logo', () => {
    render(
    <Button />
    );

  });
})