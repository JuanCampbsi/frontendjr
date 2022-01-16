import React from "react";
import { Overlay } from "./styles";

interface Props {
  closeModal?: any;
  children?: React.ReactNode
}

function BaseModal({
  closeModal,
  children,
  ...rest
}: Props) {
  return (
    <Overlay onClick={closeModal}>
      {children}
    </Overlay>
  )
}

export default BaseModal;
