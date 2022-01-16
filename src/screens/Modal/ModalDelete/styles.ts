import styled from 'styled-components/macro';

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.375rem;
`;

export const ContainerDelete = styled.div`
  width: 27.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--color_white);
  padding: 3.125rem 2.25rem 2.0625rem 2.25rem;
  position: relative;
  cursor: initial;

  @media (max-width: 648px) {
    width: 90%;
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


export const IconDelete = styled.div`
  width: 9.9375rem;
  height: 9.9375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #db25250f;
  border-radius: 50%;
  border: 0.375rem solid var(--color_lightGray);
  padding: 2.8125rem 2.625rem;

  img {
    width: 100%;
  }
`;


export const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: var(--color_lightGray);
`;

export const TextDelete = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color_darkGray);
  margin-bottom: 1.75rem;
`;


export const TitleDelete = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color_red);
  margin-top: 0.8125rem;
  margin-bottom: 1.5625rem;
`;


