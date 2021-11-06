import styled from "styled-components";

export const SignInAndUpContainer = styled.div`
    max-width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;

    @media screen and (max-width: 800px) {
        width: unset;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 auto 0 10px;
  }
`

