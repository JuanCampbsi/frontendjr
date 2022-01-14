import styled from 'styled-components/macro';
import backgroundSearch from "../../assets/image/background-search.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color_gray);
`;

export const Header = styled.div`
  width: 100%;
  height: 4rem;
  padding: 0.8125rem 1.5rem;
  background: transparent
    linear-gradient(272deg, var(--color_pink) 0%, var(--color_purple) 100%)
    no-repeat padding-box;
  box-shadow: 0 0.1875rem 0.375rem #00000029;
`;

export const Logo = styled.img`
  width: 12rem;
`;

export const ContainerSearch = styled.div`
  width: 100%;
  height: 12.3125rem;
  display: flex;
  justify-content: center;
  background: url(${backgroundSearch}) no-repeat padding-box;
  background-size: cover;
  background-position: center center;
`;

export const SearchLabel = styled.label`
  max-width: 80%;
  width: 65.375rem;
  height: 4.6875rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 5.1875rem;
`;

export const Search = styled.input`
  width: 100%;
  padding: 1.75rem 4.4375rem 1.75rem 1.4375rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 0.5rem;

  @media (max-width: 648px) {
    padding: 0.75rem 4.4375rem 0.75rem 1.4375rem;
    font-size: 1rem;
  }
`;

export const ButtonSearch = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  position: absolute;
  right: 1.5625rem;

  @media (max-width: 648px) {
    width: 1.5625rem;
  }
`;

export const ContainerCards = styled.div`
  padding: 2rem 0 5.6875rem 0;

  @media (max-width: 648px) {
    width: 90%;
    padding: 2rem 0;
  }
`;

export const HeaderCards = styled.div`
  width: 65.375rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.25rem;

  @media (max-width: 648px) {
    width: 90%;
    margin: 0 auto 2.25rem auto;
    align-items: center;
  }
`;

export const TitleCards = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color_purple);

  @media (max-width: 648px) {
    font-size: 1.5rem;
  }
`;

export const GroupCards = styled.div`
  display: grid;
  grid-gap: 2.3125rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;

  @media (max-width: 648px) {
    grid-template-columns: 1fr;
  }
`;

export const Message = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  grid-column: 2/4;
  grid-row: 3;

  @media (max-width: 648px) {
    grid-column: 1;
  }
`;

// Modal Trash
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

export const TitleDelete = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color_red);
  margin-top: 0.8125rem;
  margin-bottom: 1.5625rem;
`;

export const TextDelete = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color_darkGray);
  margin-bottom: 1.75rem;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.0625rem;
  background: var(--color_lightGray);
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.375rem;
`;

export const ContainerPaginate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const Paginate = styled.button`
  width: 20%;
  height: 3rem;
  box-shadow: 0 0.1875rem 0.375rem #00000029;
  background: var(--color_white);
  border-radius: 0.5rem;
  grid-column: 2;
  border: none;
  font-size: 1.5rem;
  color: var(--color_orange);
  margin-right: 1rem;

  :last-child {
    margin-left: 1rem;
    margin-right: 0;
    grid-column: 3;
  }
`;

// Modal Warning

export const ContainerWarning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--color_darkGray);
  background: var(--color_white);
  position: relative;
  padding: 2.125rem 2.25rem 2.0625rem 2.25rem;

  @media (max-width: 648px) {
    width: 80%;
  }
`;
