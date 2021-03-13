import styled from "styled-components";

export const Styles = styled.div`
  > div {
    min-height: 100vh;
    width: calc(100% - 240px);
    margin: 0 0 0 auto;

    > section {
      padding: 50px;
      margin-top: 70px;
    }

    @media (max-width: 700px) {
      width: 100%;
      > section {
        margin: 20px 0;
        padding: 0 5%;
      }
    }
  }
`;
