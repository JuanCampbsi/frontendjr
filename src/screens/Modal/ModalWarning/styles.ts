import styled from 'styled-components';

export const ContainerWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color_darkGray);
  background: ${({ theme }) => theme.colors.secondary_container};
  position: relative;
  padding: 2.125rem 2.25rem 2.0625rem 2.25rem;

  @media (max-width: 648px) {
    width: 80%;
  }
`;

export const ExitDelete = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  box-shadow: 0 0.1875rem 0.375rem #e7631636;
  position: absolute;
  top: -1rem;
  right: -1rem;
  border-radius: 50%;
  cursor: pointer;
`;
