import styled from 'styled-components';

interface Props {
  marginBottom?: any;  
}

export const Container = styled.div`
  width: 40.125rem;
  height: 47.9375rem;

  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.colors.secondary_container};

  position: absolute;
  top: 0;
  right: 0;
  padding: 2.5625rem 2rem 0 2rem;

  cursor: initial;
  animation: animationIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  @keyframes animationIn {
    0% {
      transform: translateX(300px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes animationOut {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(600px);
    }
  }

  @media (max-width: 648px) {
    width: 100%;
    height: 100vh;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`;

export const ExitDelete = styled.img`
  width: 2.125rem;
  height: 2.125rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  box-shadow: 0 0.1875rem 0.375rem #e7631636;  
  border-radius: 50%;
  cursor: pointer;
`;

export const RowHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderImage = styled.img`
  width: 2.875rem;
  margin-right: 1.125rem;
  margin-bottom: 2rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.secondary_title};

  margin-bottom: 2rem;
`;


export const TitleInput = styled.h2`
  margin-bottom: 0.6875rem;

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.tertiary_text};
`;

export const Input = styled.input`
  width: 100%;

  color: ${({ theme }) => theme.colors.primary_text};

  font-size: 1.125rem 1.5625rem;
  font-weight: 300;

  padding: 1.125rem;
  border: 0.0625rem solid var(--color_lightGray);
  border-radius: 0.5rem;
  margin-bottom: 3.125rem;

  :nth-of-type(2) {
    display: none;
  }
`;

export const Label = styled.label`
  width: 100%;  
  padding: 1.125rem 15.125rem 1.125rem 1.125rem;
  margin-bottom: 3.125rem;
  position: relative;

  border: 0.0625rem solid var(--color_lightGray);
  border-radius: 0.5rem;

  p {
    color: ${({ theme }) => theme.colors.primary_text};

    font-size: 1.125rem 1.5625rem;
    font-weight: 300;
    
    width: 100%;
    overflow-x: hidden;
  }
`;

export const Line = styled.div<Props>`
  width: 100%;
  height: 0.0625rem;
  background: var(--color_lightGray);
  margin-bottom: ${(props) => props.marginBottom};
`;