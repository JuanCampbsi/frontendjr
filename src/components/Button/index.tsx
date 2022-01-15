import React from "react";

import { Container } from "./styles";

export interface Props {
  funcAction?: (value: any) => void;
  widthButton?: string;
  positionButton?: string;
  topButton?: string;
  rightButton?: string;
  paddingButton?: string;
  heightButton?: string;
  colorButton?: string;
  borderButton?: string;
  alignSelfButton?: string;
  backgroundButton?: string;
  disabled?: boolean;
  children: React.ReactNode
}

export default function Button({
  funcAction,
  widthButton,
  positionButton,
  topButton,
  rightButton,
  paddingButton,
  heightButton,
  colorButton,
  borderButton,
  alignSelfButton,
  backgroundButton,
  disabled,
  children
}: Props) {
  return (
    <Container
      type="button"
      onClick={funcAction}
      widthButton={widthButton}
      positionButton={positionButton}
      topButton={topButton}
      rightButton={rightButton}
      paddingButton={paddingButton}
      heightButton={heightButton}
      colorButton={colorButton}
      borderButton={borderButton}
      alignSelfButton={alignSelfButton}
      backgroundButton={backgroundButton}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};


