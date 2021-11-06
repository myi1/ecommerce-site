import styled from "styled-components";

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    @media screen and (max-width: 800px) {
    max-width: 90%;
    margin-top: 3rem;
  }
`;

export const SignUpTitle = styled.h2`
    margin: 10px 0;
`
