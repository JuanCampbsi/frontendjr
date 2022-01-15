import styled from "styled-components";

interface Props {
  colorButtonRed?: any;
  colorButtonOrange?: any;
}

export const Container = styled.div`
  box-shadow: 0 0.1875rem 0.375rem #00000029;
  border-radius: 0.5rem;

  @media (max-width: 648px) {
    width: 90%;
  }
`;

export const Card = styled.div`
  width: 14.625rem;
  height: auto;
  min-height: 14.6875rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background:  ${({ theme }) => theme.colors.secondary_container};
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  border-radius: 0.5rem 0.5rem 0 0;

  @media (max-width: 648px) {
    width: 100%;
  }
`;

export const CircleImageCard = styled.div`
  width: 5.9375rem;
  height: 5.9375rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.625rem;
  background: ${({ theme }) => theme.colors.primary};
  border: 0.0625rem solid #e4e4e4;
  overflow: hidden;

  img {
    max-width: 4.9375rem;
  }
`;

export const Line = styled.div`
  width: 80%;
  height: 0.0625rem;
  background: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.625rem;
`;

export const TextCard = styled.p`
  display: flex;
  align-items: center;
  max-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary_container};
  text-align: center;
  padding: 2rem 1.375rem;
  word-break: break-word;

  p:first-letter {
    text-transform: capitalize;
  }
`;

export const Buttons = styled.div`
  display: flex;
  border-radius: 0 0 0.5rem 0.5rem;
  background: ${({ theme }) => theme.colors.secondary_container};
  box-shadow: inset 0 0.1875rem 0.375rem #0000000f;
  padding: 0.8125rem 0;
`;

export const Button = styled.button<Props>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9375rem;
  font-weight: 400;
  background: none;
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.secondary_button};

  :hover {
    color: ${(theme) =>
    theme.colorButtonRed ? "var(--color_red)" : "var(--color_orange)"};
  }

  :first-child {
    border-right: 0.0625rem solid var(--color_gray);
  }

  img {
    max-width: 0.8125rem;
    margin-right: 0.6875rem;
  }
`;
