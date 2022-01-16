import { render } from "@testing-library/react";
import BaseModal from "../../components/BaseModal";

describe("Button component", () =>{
  it('should be able to render logo', () => {
    render(
    <BaseModal />
    );
  });
})