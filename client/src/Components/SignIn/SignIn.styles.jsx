import styled from "styled-components";

export const SignInContainer = styled.div`
    max-width: 380px;
    display: flex;
    flex-direction: column;
    padding-right: 1rem;

    @media screen and (max-width: 800px) {
    max-width: 90%;
    padding-right: 0;
  }
`;

export const SignInTitle = styled.h2`
    margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    
`;