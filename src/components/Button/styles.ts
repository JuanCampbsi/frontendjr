import styled from "styled-components";

interface Props {
  funcAction?: any;
  widthButton?: any;
  positionButton?: any;
  topButton?: any;
  rightButton?: any;
  paddingButton?: any;
  heightButton?: any;
  colorButton?: any;
  borderButton?: any;
  alignSelfButton?: any;
  backgroundButton?: any;
  disabled?: any;
}

export const Container = styled.button<Props>`
  width: ${(type) => type.widthButton || "auto"};
  height: ${(type) => type.heightButton || "3rem"};
  padding: ${(type) => type.paddingButton || ".75rem 2.5rem"};
  color: ${(type) => type.colorButton || "var(--color_white)"};
  background: ${(type) => type.backgroundButton || "var(--color_orange)"};
  border: ${(type) => type.borderButton || "none"};
  font-size: 1.125rem;
  font-weight: 700;
  box-shadow: 0 0.1875rem 0.375rem #92207242;
  outline: none;
  border-radius: 0.5rem;
  align-self: ${(type) => type.alignSelfButton};
  position: ${(type) => type.positionButton};
  top: ${(type) => type.topButton};
  right: ${(type) => type.rightButton};
  display: flex;
  justify-content: center;
  align-items: center;

  :disabled {
    opacity: 0.4;
    cursor: initial;
  }
`;